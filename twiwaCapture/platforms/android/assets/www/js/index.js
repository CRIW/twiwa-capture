/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        app.pushEvent('Device ready', 'Connection established', 'information');
        app.pushEvent('NotificationListener', JSON.stringify(notificationListener), 'information');
	      notificationListener.listen(function(n){
          app.pushEvent('Notification', JSON.stringify(n, null, '\t'), 'data');
        }, function(e){
          app.pushEvent("Notification Error ", e, 'error');
        });
    },

    pushEvent: function(title, content, style){
      var eventContainer = document.getElementById('event-container');

      var newEvent = document.createElement('div');
      newEvent.classList.add('event');
      newEvent.classList.add(style);

      var eventHeader = document.createElement('div');
      eventHeader.classList.add('header');
      eventHeader.innerText = title;

      var eventContent = document.createElement('div');
      eventContent.classList.add('content');
      eventContent.innerText = content;

      newEvent.appendChild(eventHeader);
      newEvent.appendChild(eventContent);

      eventContainer.insertBefore(newEvent, eventContainer.children[0]);
    }
};

app.initialize();
app.onDeviceReady();
