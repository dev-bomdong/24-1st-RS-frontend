import React, { Component } from 'react';
import './Signin.scss';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <div className="signin-navbar"></div>
        <main>
          <div className="signin-box">
            <span className="signin-pagetitle">로그인</span>

            <form className="signin-form">
              <div className="inputbox">
                <span className="inputname">이메일</span>
                <input
                  className="signin-input"
                  name="email"
                  placeholder="이메일을 입력해주세요"
                  onChange={this.handleInput}
                />
              </div>

              <div className="inputbox">
                <span className="inputname">비밀번호</span>
                <input
                  className="signin-input"
                  placeholder="비밀번호를 입력해주세요"
                  name="password"
                  onChange={this.handleInput}
                ></input>
              </div>
            </form>

            <button className="signin-btn">로그인</button>
            <button className="socialbtn kakaoBtn">
              <svg>
                <path d="M12 4c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.682 2.545-.78 2.94-.123.49.178.483.376.351.155-.103 2.466-1.675 3.464-2.353.541.08 1.1.123 1.67.123 4.97 0 9-3.186 9-7.115C21 7.185 16.97 4 12 4"></path>
              </svg>
              카카오 로그인
            </button>
            <button className="socialbtn naverBtn">
              <img
                src="data:image/png;base64,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"
                alt="naver-button"
              ></img>
              네이버 로그인
            </button>
            <button className="socialbtn googleBtn">
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <g fill="#000" fill-rule="evenodd">
                  <path
                    d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                    fill="#EA4335"
                  ></path>
                  <path
                    d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                    fill="#34A853"
                  ></path>
                  <path fill="none" d="M0 0h18v18H0z"></path>
                </g>
              </svg>
              구글 로그인
            </button>

            <span className="findaccount">아이디 찾기</span>
            <span className="findaccount">비밀번호 찾기</span>
            <span className="join">회원가입(+3000p) 찾기</span>
          </div>
        </main>
      </div>
    );
  }
}
//
