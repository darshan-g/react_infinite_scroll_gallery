import React, { useState } from "react";
import * as S from "../styledComponents";
import { connect } from "react-redux";
import { getImages, setSearchText, removeImages } from "../../actions/index";
import Logo from "../../assets/images/Logo";

function Header(props) {
  const [searchTxt, setSearchTxt] = useState("");

  const { getImages, setSearchText, removeImages, isImageViewerOpen } = props;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSearchText(searchTxt);
    removeImages();
    if (searchTxt.trim().length) {
      getImages({ pageNumber: 0, searchText: searchTxt });
    }
  };

  const handleOnChange = (e) => {
    setSearchTxt(e.target.value);
  };

  return (
    <S.Header isImageViewerOpen={isImageViewerOpen}>
      <S.Logo class="logo">
        <Logo />
      </S.Logo>
      <S.Nav>
        <S.SearchBarWrapper>
          <S.SearchForm onSubmit={handleOnSubmit}>
            <S.SearchInput
              type="text"
              placeholder="Search"
              value={searchTxt}
              onChange={(evt) => handleOnChange(evt)}
            />
            <S.SubmitBtn type="submit" value="Search"></S.SubmitBtn>
          </S.SearchForm>
        </S.SearchBarWrapper>
      </S.Nav>
    </S.Header>
  );
}

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    pageNumber: state.pageNumber,
    isImageViewerOpen: state.isImageViewerOpen
  };
};

export default connect(mapStateToProps, {
  getImages,
  setSearchText,
  removeImages
})(Header);
