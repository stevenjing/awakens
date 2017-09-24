import React from 'react';
import $ from 'jquery';

export default class RequestHelper extends React.component {
  get(url) {
    return $.get(url);
  }

  post(url, payload) {
    return $.post(url, payload);
  }

  // patch(url) {

  // }

  // delete(url) {
    
  // }
}