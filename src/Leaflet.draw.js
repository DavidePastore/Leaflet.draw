/**
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
L.drawVersion = '0.4.2';
/**
 * @class L.Draw
 * @aka Draw
 *
 *
 * To add the draw toolbar set the option drawControl: true in the map options.
 *
 * @example
 * ```js
 *      var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 * ```
 *
 * ### Adding the edit toolbar
 * To use the edit toolbar you must initialise the Leaflet.draw control and manually add it to the map.
 *
 * ```js
 *      var map = L.map('map').setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 *
 *      // FeatureGroup is to store editable layers
 *      var drawnItems = new L.FeatureGroup();
 *      map.addLayer(drawnItems);
 *
 *      var drawControl = new L.Control.Draw({
 *          edit: {
 *              featureGroup: drawnItems
 *          }
 *      });
 *      map.addControl(drawControl);
 * ```
 *
 * The key here is the featureGroup option. This tells the plugin which FeatureGroup contains the layers that
 * should be editable. The featureGroup can contain 0 or more features with geometry types Point, LineString, and Polygon.
 * Leaflet.draw does not work with multigeometry features such as MultiPoint, MultiLineString, MultiPolygon,
 * or GeometryCollection. If you need to add multigeometry features to the draw plugin, convert them to a
 * FeatureCollection of non-multigeometries (Points, LineStrings, or Polygons).
 */
L.Draw = {};

/**
 * @class L.drawLocal
 * @aka L.drawLocal
 *
 * The core toolbar class of the API — it is used to create the toolbar ui
 *
 * @example
 * ```js
 *      var modifiedDraw = L.drawLocal.extend({
 *          draw: {
 *              toolbar: {
 *                  buttons: {
 *                      polygon: 'Draw an awesome polygon'
 *                  }
 *              }
 *          }
 *      });
 * ```
 *
 * The default state for the control is the draw toolbar just below the zoom control.
 *  This will allow map users to draw vectors and markers.
 *  **Please note the edit toolbar is not enabled by default.**
 */
L.drawLocal = {
	// format: {
	// 	numeric: {
	// 		delimiters: {
	// 			thousands: ',',
	// 			decimal: '.'
	// 		}
	// 	}
	// },
	draw: {
		toolbar: {
			// #TODO: this should be reorganized where actions are nested in actions
			// ex: actions.undo  or actions.cancel
			actions: {
				title: 'Annulla il disegno',
				text: 'Annulla'
			},
			finish: {
				title: 'Finisci il disegno',
				text: 'Finisci'
			},
			undo: {
				title: 'Cancella l\'ultimo punto disegnato',
				text: 'Cancella l\'ultimo punto'
			},
			buttons: {
				polyline: 'Disegna una polilinea',
				polygon: 'Disegna un poligono',
				rectangle: 'Disegna un rettangolo',
				circle: 'Disegna un cerchio',
				marker: 'Disegna un marker',
				circlemarker: 'Disegna un circlemarker'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: ''
				},
				radius: 'Raggio'
			},
			circlemarker: {
				tooltip: {
					start: 'Clicca sulla mappa per posizionare il segnalino circolare.'
				}
			},
			marker: {
				tooltip: {
					start: 'Clicca sulla mappa per posizionare il marker.'
				}
			},
			polygon: {
				tooltip: {
					start: 'Clicca per cominciare a disegnare la figura.',
					cont: 'Clicca per continuare a disegnare la figura.',
					end: 'Clicca il primo punto per chiudere la figura.'
				}
			},
			polyline: {
				error: '<strong>Errore:</strong> i bordi della figura non si possono incrociare!',
				tooltip: {
					start: 'Clicca per iniziare a disegnare la linea.',
					cont: 'Clicca per continuare a disegnare la linea.',
					end: 'Clicca l\'ultimo punto per finire la linea.'
				}
			},
			rectangle: {
				tooltip: {
					start: 'Clicca e trascina per disegnare il rettangolo.'
				}
			},
			simpleshape: {
				tooltip: {
					end: ''
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'Salva le modifiche',
					text: 'Salva'
				},
				cancel: {
					title: 'Anulla modifica, scarta tutte le modifiche',
					text: 'Annulla'
				},
				clearAll:{
					title: 'Pulisci tutti i layer',
					text: 'Pulisci tutto'
				}
			},
			buttons: {
				edit: 'Modifica i layer',
				editDisabled: 'Nessun layer da modificare',
				remove: 'Cancella i layer',
				removeDisabled: 'Nessun layer da cancellare'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'Cliccare e spostare i quadrati sulla<br/>circonferenza per modificare il raggio<br/>di azione',
					subtext: 'Clicca annulla per annullare le modifiche.'
				}
			},
			remove: {
				tooltip: {
					text: ''
				}
			}
		}
	}
};
