import styled from "styled-components";
import { css } from "styled-components";
import { maxPhone } from "../../utils/media";

export const StakingContent = styled.section`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input,
  p.description {
    margin-bottom: 8px;
    width: 488px;
  }

  p.description {
    font-size: 12px;
  }

  .adornment {
    color: #ffffff;
  }

  button.stake {
    width: 220px;
  }

  svg {
    width: 16px;
    height: 16px;
    margin: 0 0 16px auto;
    color: ${(props) => props.theme.colors.blue};
  }

  .relay-chains-container {
    position: relative;

    svg {
      display: block;
    }

    .searchbar {
      width: 422px;
    }

    .search-icon {
      color: white;
    }

    .dropdown {
      position: absolute;
      top: 64px;
      z-index: 99999;
    }
  }

  .dropdown {
    width: 100%;
    height: 286px;
    border: 1px solid ${(props) => props.theme.colors.green};
    border-radius: 10px;
    background-color: #192430;
    padding: 16px 8px;
    margin: -8px 0 8px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dropdown-container {
    height: 202px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0 24px;
  }

  .dropdown-container::-webkit-scrollbar {
    width: 4px !important;
  }

  .dropdown-container::-webkit-scrollbar-thumb {
    background-color: #fafafa;
    border-radius: 4px;
    height: 62px;
  }

  .dropdown-container::-webkit-scrollbar-track {
    background-color: #32404f;
    opacity: 0.5;
  }

  .dropdown-row {
    display: flex;
    justify-content: space-between;

    input {
      margin: 0;
      width: auto;
    }
  }

  .dropdown-spacer {
    width: 100%;
    height: 1px;
    background-color: #32404f;
    margin: 18px 0 12px 0;
  }

  .selected-chains-container {
    width: 100%;
    max-width: 488px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }

  .selected-chain-tag {
    border: 1px solid #606f7e;
    border-radius: 4px;
    height: 32px;
    width: 64px;
    margin: 18px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${maxPhone(css`
    input,
    p.description {
      width: 100%;
    }

    .relay-chains-container .searchbar {
      width: 90%;
    }
  `)}
`;

export const StakingModalContent = styled.div`
  .modal-title {
    margin: 16px 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 110%;
    text-align: center;
    color: ${(props) => props.theme.colors.white};
  }

  input {
    margin-bottom: 16px;
  }

  .confirm-container {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      margin: 16px 0;
    }
  }

  .ledger-banner-container {
    margin-bottom: 2rem;
  }

  .you-are-sending {
    font-weight: bold;
    font-size: 18px;
    line-height: 110%;
    text-align: center;
    color: ${(props) => props.theme.secondaryWhite};
    margin-bottom: 17px;
  }

  .error {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
  }
`;
