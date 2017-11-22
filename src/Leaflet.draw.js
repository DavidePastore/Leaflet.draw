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
	// }
};


L.drawLocalI18N = {
	en: {
		draw: {
			toolbar: {
				// #TODO: this should be reorganized where actions are nested in actions
				// ex: actions.undo  or actions.cancel
				actions: {
					title: 'Draw search circle',
					text: 'Draw search circle'
				},
				finish: {
					title: 'Finish drawing',
					text: 'Finish'
				},
				undo: {
					title: 'Delete last point drawn',
					text: 'Delete last point'
				},
				buttons: {
					polyline: 'Draw a polyline',
					polygon: 'Draw a polygon',
					rectangle: 'Draw a rectangle',
					circle: 'Draw a circle',
					marker: 'Draw a marker',
					circlemarker: 'Draw a circlemarker'
				}
			},
			handlers: {
				circle: {
					tooltip: {
						start: ''
					},
					radius: 'Radius'
				},
				circlemarker: {
					tooltip: {
						start: 'Click map to place circle marker.'
					}
				},
				marker: {
					tooltip: {
						start: 'Click map to place marker.'
					}
				},
				polygon: {
					tooltip: {
						start: 'Click to start drawing shape.',
						cont: 'Click to continue drawing shape.',
						end: 'Click first point to close this shape.'
					}
				},
				polyline: {
					error: '<strong>Error:</strong> shape edges cannot cross!',
					tooltip: {
						start: 'Click to start drawing line.',
						cont: 'Click to continue drawing line.',
						end: 'Click last point to finish line.'
					}
				},
				rectangle: {
					tooltip: {
						start: 'Click and drag to draw rectangle.'
					}
				},
				simpleshape: {
					tooltip: {
						end: 'Release mouse to finish drawing.'
					}
				}
			}
		},
		edit: {
			toolbar: {
				actions: {
					save: {
						title: 'Save changes',
						text: 'Save'
					},
					cancel: {
						title: 'Cancel editing, discards all changes',
						text: 'Cancel'
					},
					clearAll:{
						title: 'Clear all layers',
						text: 'Clear All'
					}
				},
				buttons: {
					edit: 'Edit layers',
					editDisabled: 'No layers to edit',
					remove: 'Delete layers',
					removeDisabled: 'No layers to delete'
				}
			},
			handlers: {
				edit: {
					tooltip: {
						text: 'Drag handles or markers to edit features.',
						subtext: 'Click cancel to undo changes.'
					}
				},
				remove: {
					tooltip: {
						text: 'Click on a feature to remove.'
					}
				}
			}
		}
	},
	it: {
		draw: {
			toolbar: {
				// #TODO: this should be reorganized where actions are nested in actions
				// ex: actions.undo  or actions.cancel
				actions: {
					title: 'Disegna il raggio di ricerca',
					text: 'Disegna il raggio di ricerca'
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
	}
};


L.drawLanguage = 'en';