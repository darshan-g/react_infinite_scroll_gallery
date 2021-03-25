import styled from "styled-components";

export const Row = styled.div`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
`;

export const Col = styled.div`
  -ms-flex: 24%; /* IE10 */
  flex: 24%;
  max-width: 25%;
  padding: 0 4px;
  box-sizing: border-box;
  @media screen and (max-width: 800px) {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
  @media screen and (max-width: 600px) {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
`;

export const Img = styled.img`
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  cursor: zoom-in;
  border-radius: 20px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 600px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    max-width: inherit;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const SearchInput = styled.input`
  margin: 0;
  background-color: #45456b;
  display: flex;
  flex: 1;
  padding: 10px;
  height: 20px;
  font-size: 0.9rem;
  color: #fff;
  border: none;
  border-radius: 0;
  position: relative;
  right: 0;
  letter-spacing: 0.05rem;
  background-repeat: no-repeat;
  background-position: 1rem 50%;
  background-size: 2rem;
  outline: 0;
  border-radius: 5px 0 0 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ccc;
  }
  @media screen and (max-width: 375px) {
    max-width: 160px;
  }
`;

export const SubmitBtn = styled.input`
  margin: 0;
  border-radius: 0 5px 5px 0;
  height: 40px;
  border: 0px;
  background: none;
  background-color: #1bb76e;
  color: #fff;
  float: right;
  padding: 10px;
  border-radius-top-right: 5px;
  -moz-border-radius-top-right: 5px;
  -webkit-border-radius-top-right: 5px;
  border-radius-bottom-right: 5px;
  -moz-border-radius-bottom-right: 5px;
  -webkit-border-radius-bottom-right: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 80px;
  background-color: #171645;
  box-shadow: 0 0px 8px rgba(212, 212, 212, 0.4);
  flex-wrap: nowrap;
  z-index: ${(p) => (p.isImageViewerOpen ? 0 : 2)};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  color: #fff;
  font-size: 3rem;
  padding-left: 2rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 0 14px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  @media screen and (max-width: 768px) {
    padding-right: 14px;
  }
`;

export const ImageGrid = styled.div`
  margin: 120px 20px 0;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    margin: 120px 10px 0;
  }
`;
