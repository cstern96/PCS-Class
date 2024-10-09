(async function () {
    'use strict';
    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
    const { DrawingManager } = await google.maps.importLibrary('drawing');
    const markers = [];
    const polylines = [];
    const circles = [];
    const polygons = [];
    const rectangles = [];
    let position = { lat: 37.7749, lng: -122.4194 };
    const map = new Map(document.getElementById('map'), {
        zoom: 4,
        center: position,
        mapId: 'DEMO_MAP_ID',
    });

    const drawingManager = new DrawingManager();
    drawingManager.setMap(map);
    drawingManager.addListener('markercomplete', marker => {
        const markerPosition = { lat: marker.getPosition().lat(), lng: marker.getPosition().lng() };
        markers.push(markerPosition);
        localStorage.setItem('markers', JSON.stringify(markers));
        drawingManager.setDrawingMode(google.maps.drawing.OverlayType.MARKER);
    });
    if (localStorage.markers) {
        const storedMarkers = JSON.parse(localStorage.markers);
        storedMarkers.forEach(m => {
            const marker = new AdvancedMarkerElement({
                map,
                position: m
            });
        });
    }
    drawingManager.addListener('polylinecomplete', polyline => {
        const polylinePath = polyline.getPath().getArray().map(latLng => ({ lat: latLng.lat(), lng: latLng.lng() }));
        polylines.push(polylinePath);
        localStorage.setItem('polylines', JSON.stringify(polylines));
        drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYLINE);
    });
    if (localStorage.polylines) {
        const storedPolylines = JSON.parse(localStorage.polylines);
        storedPolylines.forEach(p => {
            const polyline = new google.maps.Polyline({
                map,
                path: p
            });
        });
    }
    drawingManager.addListener('circlecomplete', circle => {
        const circleCenter = { lat: circle.getCenter().lat(), lng: circle.getCenter().lng() };
        const circleRadius = circle.getRadius();
        const circleData = {
            center: circleCenter,
            radius: circleRadius
        };
        circles.push(circleData);
        localStorage.setItem('circles', JSON.stringify(circles));
        drawingManager.setDrawingMode(google.maps.drawing.OverlayType.CIRCLE);
    });
    if (localStorage.circles) {
        const storedPolylines = JSON.parse(localStorage.circles);
        storedPolylines.forEach(c => {
            const circle = new google.maps.Circle({
                map,
                center: c.center,
                radius: c.radius
            });
        });
    }
    drawingManager.addListener('polygoncomplete', polygon => {
        const polygonPath = polygon.getPath().getArray().map(latLng => ({ lat: latLng.lat(), lng: latLng.lng() }));
        polygons.push(polygonPath);
        localStorage.setItem('polygons', JSON.stringify(polygons));
        drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
    });
    if (localStorage.polygons) {
        const storedPolygons = JSON.parse(localStorage.polygons);
        storedPolygons.forEach(p => {
            const polygon = new google.maps.Polygon({
                map,
                paths: p
            });
        });
    }
    drawingManager.addListener('rectanglecomplete', rectangle => {
        const bounds = rectangle.getBounds();
        const rectangleBounds = {
            north: bounds.getNorthEast().lat(),
            east: bounds.getNorthEast().lng(),
            south: bounds.getSouthWest().lat(),
            west: bounds.getSouthWest().lng(),
        };
        rectangles.push(rectangleBounds);
        localStorage.setItem('rectangles', JSON.stringify(rectangles));
        drawingManager.setDrawingMode(google.maps.drawing.OverlayType.RECTANGLE);
    });
    if (localStorage.rectangles) {
        const storedRectangles = JSON.parse(localStorage.rectangles);
        storedRectangles.forEach(r => {
            const rectangle = new google.maps.Rectangle({
                map,
                bounds: {
                  north: r.north,
                  east: r.east,
                  south: r.south,
                  west: r.west

                }
            });
        });
    }
}());