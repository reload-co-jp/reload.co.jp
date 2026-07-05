"use client"

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: var(--font-sawarabi-gothic), sans-serif;
    line-height: 1.5;
  }
  html {
    background-color: #111;
  }
  body {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-image: url(/images/header.jpg);
    background-color: #222;
    color: #ccc;
    margin: 0;
    padding: 0;
  }
  a {
    color: #bbd;
  }
  header {
    padding: 1rem;
  }
  h1 {
    font-size: 1rem;
    margin: 0;
  }
  h2 {
    border-bottom: solid #ccc 1px;
    font-size: 2.5rem;
    font-weight: normal;
    padding: 0;
  }
  h3 {
    font-size: 1.75rem;
  }
  section,
  nav,
  aside {
    margin: auto;
    max-width: 64rem;
  }
  section {
    padding: 4rem 1rem;
  }
  strong {
    color: #3e62ad;
    text-shadow: 1px 1px 1px rgba(224, 224, 224, 0.4);
  }
  table {
    border-spacing: 0;
    width: 100%;
  }
  th,
  td {
    border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    min-width: 6rem;
    padding: 0.5rem;
  }
  label {
    font-size: 0.9rem;
  }
  input,
  textarea {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: none;
    border: 1px solid rgba(224, 224, 224, 0.4);
    color: #f0f0f0;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.5rem;
    width: 100%;
  }
  input:active,
  input:focus,
  textarea:active,
  textarea:focus {
    appearance: none;
    border: 1px solid #999;
    outline: none;
  }
  button {
    background-color: #3e62ad;
    border: none;
    border-radius: none;
    color: #f0f0f0;
    cursor: pointer;
    display: block;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
  }
  footer {
    padding: 4rem 1rem;
    text-align: center;
  }
  iframe {
    border: none;
    display: block;
    margin: 0.5rem auto;
    max-width: min(960px, 100%);
  }
`

export default GlobalStyles
