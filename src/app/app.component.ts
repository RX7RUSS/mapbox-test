import { Component } from '@angular/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import MapboxDraw from 'mapbox-gl-draw/dist/mapbox-gl-draw.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  static t;
  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicng3cnVzcyIsImEiOiJjam5rcTRsOTUwNGRnM3BvaHVqNjVjYTZ2In0.K8t6Ff_8q_z4PGYTugyNFA';
    AppComponent.t.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 8,
      center: [-97.7, 30.0]
    });

     const draw = new MapboxDraw({
        displayControlsDefault: true,
        controls: {
            polygon: true,
            trash: true
        }
    });
    AppComponent.t.map.addControl(draw);
  }
}
