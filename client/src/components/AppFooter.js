import React from 'react';
import {
  Row,
  Column
} from 'react-foundation';

let Footer = () => (
  <footer className="footer">
    <Row>
      <Column medium={6} large={6}>
        <span className="copyright">Copyright © Presentate.com 2018 - All Right Reserved</span>
        <span className="author">Designed & Produced by <strong>wasya1212</strong></span>
      </Column>
      <Column medium={6} large={6}>
        <p className="rooles">
          <span className="privacy-policy"><a href="">Privacy Policy</a></span>
          &nbsp;|&nbsp;
          <span className="term-and-conditions"><a href="">Term and Conditions</a></span>
        </p>
      </Column>
    </Row>
  </footer>
);

export default Footer;
