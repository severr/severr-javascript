/**
 * Severr API
 * Get your application events and errors to Severr via the *Severr API*.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['severr/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SeverrApi) {
      root.SeverrApi = {};
    }
    root.SeverrApi.CustomDoubleData = factory(root.SeverrApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomDoubleData model module.
   * @module severr/model/CustomDoubleData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CustomDoubleData</code>.
   * @alias module:severr/model/CustomDoubleData
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>CustomDoubleData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:severr/model/CustomDoubleData} obj Optional instance to populate.
   * @return {module:severr/model/CustomDoubleData} The populated <code>CustomDoubleData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customData1')) {
        obj['customData1'] = ApiClient.convertToType(data['customData1'], 'Number');
      }
      if (data.hasOwnProperty('customData2')) {
        obj['customData2'] = ApiClient.convertToType(data['customData2'], 'Number');
      }
      if (data.hasOwnProperty('customData3')) {
        obj['customData3'] = ApiClient.convertToType(data['customData3'], 'Number');
      }
      if (data.hasOwnProperty('customData4')) {
        obj['customData4'] = ApiClient.convertToType(data['customData4'], 'Number');
      }
      if (data.hasOwnProperty('customData5')) {
        obj['customData5'] = ApiClient.convertToType(data['customData5'], 'Number');
      }
      if (data.hasOwnProperty('customData6')) {
        obj['customData6'] = ApiClient.convertToType(data['customData6'], 'Number');
      }
      if (data.hasOwnProperty('customData7')) {
        obj['customData7'] = ApiClient.convertToType(data['customData7'], 'Number');
      }
      if (data.hasOwnProperty('customData8')) {
        obj['customData8'] = ApiClient.convertToType(data['customData8'], 'Number');
      }
      if (data.hasOwnProperty('customData9')) {
        obj['customData9'] = ApiClient.convertToType(data['customData9'], 'Number');
      }
      if (data.hasOwnProperty('customData10')) {
        obj['customData10'] = ApiClient.convertToType(data['customData10'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} customData1
   */
  exports.prototype['customData1'] = undefined;
  /**
   * @member {Number} customData2
   */
  exports.prototype['customData2'] = undefined;
  /**
   * @member {Number} customData3
   */
  exports.prototype['customData3'] = undefined;
  /**
   * @member {Number} customData4
   */
  exports.prototype['customData4'] = undefined;
  /**
   * @member {Number} customData5
   */
  exports.prototype['customData5'] = undefined;
  /**
   * @member {Number} customData6
   */
  exports.prototype['customData6'] = undefined;
  /**
   * @member {Number} customData7
   */
  exports.prototype['customData7'] = undefined;
  /**
   * @member {Number} customData8
   */
  exports.prototype['customData8'] = undefined;
  /**
   * @member {Number} customData9
   */
  exports.prototype['customData9'] = undefined;
  /**
   * @member {Number} customData10
   */
  exports.prototype['customData10'] = undefined;



  return exports;
}));


