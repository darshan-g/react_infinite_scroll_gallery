/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import * as S from "../styledComponents";
import ImageViewer from "react-simple-image-viewer";
import { getImages, setPageNumber, setViewer } from "../../actions/index";
import { connect } from "react-redux";

function ImageResults(props) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [imagesToShow, setImagesToShow] = useState([]);
  const [arrCol1, setArrCol1] = useState([]);
  const [arrCol2, setArrCol2] = useState([]);
  const [arrCol3, setArrCol3] = useState([]);
  const [arrCol4, setArrCol4] = useState([]);
  const [imagesArray, setImagesArray] = useState([]);

  const {
    getImages,
    setPageNumber,
    setViewer,
    images,
    searchText,
    pageNumber
  } = props;

  useEffect(() => {
    if (images?.length) {
      chunkArray(images, 4);
    } else {
      setArrCol1([]);
      setArrCol2([]);
      setArrCol3([]);
      setArrCol4([]);
    }
  }, [images]);

  useEffect(() => {
    setImagesArray([arrCol1, arrCol2, arrCol3, arrCol4]);
  }, [arrCol1, arrCol2, arrCol3, arrCol4]);

  const fillArrCol1 = (result) => {
    setArrCol1(!arrCol1.length ? result[0] : [...arrCol1, ...result[0]]);
  };

  const fillArrCol2 = (result) => {
    fillArrCol1(result);
    setArrCol2(!arrCol2.length ? result[1] : [...arrCol2, ...result[1]]);
  };

  const fillArrCol3 = (result) => {
    fillArrCol2(result);
    setArrCol3(!arrCol3.length ? result[2] : [...arrCol3, ...result[2]]);
  };

  const fillArrCol4 = (result) => {
    fillArrCol3(result);
    setArrCol4(!arrCol4.length ? result[3] : [...arrCol4, ...result[3]]);
  };

  const chunkArray = (array, parts) => {
    let result = [];
    for (let i = parts; i > 0; i--) {
      result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    if (result.length) {
      switch (result.length) {
        case 1:
          fillArrCol1(result);
          break;
        case 2:
          fillArrCol2(result);
          break;
        case 3:
          fillArrCol3(result);
          break;
        case 4:
          fillArrCol4(result);
      }
    }
  };

  const fetchMore = () => {
    setPageNumber(pageNumber + 1);
    getImages({
      pageNumber: pageNumber + 1,
      searchText: searchText
    });
  };

  const openImageViewer = useCallback((img) => {
    setImagesToShow([img.link]);
    setIsViewerOpen(true);
    setViewer(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
    setViewer(false);
  };

  const isEmpty = (a) => Array.isArray(a) && a.every(isEmpty);

  const renderImages = () => {
    return (
      <>
        {!isEmpty(imagesArray) && (
          <S.Row>
            {imagesArray.map((colArr) => (
              <>
                {colArr?.length > 0 && (
                  <S.Col>
                    {colArr.map((img) => (
                      <>
                        {img?.is_album ? (
                          <>
                            {img?.images?.map((albImg) => (
                              <S.Img
                                onClick={() => openImageViewer(albImg)}
                                key={albImg.id}
                                src={albImg.link}
                                alt=""
                              />
                            ))}
                          </>
                        ) : (
                          <S.Img
                            onClick={() => openImageViewer(img)}
                            key={img.id}
                            src={img.link}
                            alt=""
                          />
                        )}
                      </>
                    ))}
                  </S.Col>
                )}
              </>
            ))}
          </S.Row>
        )}
      </>
    );
  };

  return (
    <S.ImageGrid>
      <InfiniteScroll
        dataLength={images?.length}
        next={fetchMore}
        hasMore={true}
      >
        {renderImages()}
      </InfiniteScroll>
      {isViewerOpen && (
        <ImageViewer
          src={imagesToShow}
          currentIndex={0}
          onClose={closeImageViewer}
        />
      )}
    </S.ImageGrid>
  );
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
    searchText: state.searchText,
    pageNumber: state.pageNumber
  };
};

export default connect(mapStateToProps, {
  getImages,
  setPageNumber,
  setViewer
})(ImageResults);
