/*
 * Copyright (C) 2011-2013 sMap Project and its contributors.
 * See the NOTICE file for details.
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



sMap.moduleConfig.Popup = {
		
		/**
		 * If true, calls module's methods "activate" after methods
		 * "initialize" and "drawContent" have been called.
		 */
		activateFromStart : true,
		
		/**
		 * If true, add a button to popup for "minimizing" (hiding) the popup without
		 * unselecting the feature.
		 */
		
		minimizeBtn : true,
		
		/**
		 * If true, allows popup to be moved around.
		 */
		allowDrag : false,
		/**
		 * Max sizes of the popup
		 */
		xMaxSize : 300,
		yMaxSize : 250,
		/**
		 * Allow the map to pan to fit the popup? true or false
		 */
		panMapIfOutOfView : false
};