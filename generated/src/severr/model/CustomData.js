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
    define(['severr/ApiClient', 'severr/model/CustomDoubleData', 'severr/model/CustomStringData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomDoubleData'), require('./CustomStringData'));
  } else {
    // Browser globals (root is window)
    if (!root.SeverrApi) {
      root.SeverrApi = {};
    }
    root.SeverrApi.CustomData = factory(root.SeverrApi.ApiClient, root.SeverrApi.CustomDoubleData, root.SeverrApi.CustomStringData);
  }
}(this, function(ApiClient, CustomDoubleData, CustomStringData) {
  'use strict';




  /**
   * The CustomData model module.
   * @module severr/model/CustomData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CustomData</code>.
   * (optional) Custom string or double data to submit along with the event. This data can then be used in the Severr UI to view segmented data.
   * @alias module:severr/model/CustomData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CustomData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:severr/model/CustomData} obj Optional instance to populate.
   * @return {module:severr/model/CustomData} The populated <code>CustomData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('stringData')) {
        obj['stringData'] = CustomStringData.constructFromObject(data['stringData']);
      }
      if (data.hasOwnProperty('doubleData')) {
        obj['doubleData'] = CustomDoubleData.constructFromObject(data['doubleData']);
      }
    }
    return obj;
  }

  /**
   * @member {module:severr/model/CustomStringData} stringData
   */
  exports.prototype['stringData'] = undefined;
  /**
   * @member {module:severr/model/CustomDoubleData} doubleData
   */
  exports.prototype['doubleData'] = undefined;



  return exports;
}));


