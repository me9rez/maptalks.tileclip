import { BBOXtype } from "./bbox";

export type postProcessingOptions = {
    filter?: string;
    opacity?: number;
    gaussianBlurRadius?: number;
}

export type fetchOptionsType = {
    referrer?: string;
    headers?: Record<string, string>;
    fetchOptions?: Record<string, any>;
    timeout?: number;
}

export type returnResultType = {
    returnBlobURL?: boolean;
}

export type getTileOptions = {
    url: string | ImageBitmap | Array<string | ImageBitmap>;
    globalCompositeOperation?: GlobalCompositeOperation;
} & postProcessingOptions & fetchOptionsType & returnResultType;


export type layoutTilesOptions = {
    urlTemplate: string;
    tiles: Array<[number, number, number]>;
    subdomains?: Array<string>;
    debug?: boolean;
} & postProcessingOptions & fetchOptionsType & returnResultType;

export type encodeTerrainTileOptions = {
    url: string;
    terrainType: 'mapzen' | 'tianditu' | 'cesium' | 'arcgis' | 'qgis-gray';
    minHeight?: number;
    maxHeight?: number;
    terrainWidth?: number;
    tileSize?: number;
    terrainColors?: Array<[number, string]>
} & fetchOptionsType & returnResultType;

export type getTileWithMaxZoomOptions = Omit<getTileOptions, 'url'> & {
    urlTemplate: string | Array<string>;
    maxAvailableZoom: number;
    x: number;
    y: number;
    z: number;
    subdomains?: Array<string>;
}

export type clipTileOptions = {
    tile: ImageBitmap;
    tileBBOX: BBOXtype;
    projection: string;
    maskId: string;
    tileSize?: number;
    reverse?: boolean;
} & returnResultType;

export type tileIntersectMaskOptions = {
    tileBBOX: BBOXtype;
    maskId: string;
};

export type transformTileOptions = getTileWithMaxZoomOptions & {
    projection: 'EPSG:4326' | 'EPSG:3857';
    errorLog?: boolean;
    zoomOffset?: number;
    debug?: boolean;
}

export type colorTerrainTileOptions = {
    tile: ImageBitmap;
    colors: Array<[number, string]>;
} & postProcessingOptions & returnResultType;

export type privateOptions = getTileOptions & {
    __taskId?: number;
    __workerId?: number;
}

export type GeoJSONPolygon = {
    type: 'Feature',
    geometry: {
        type: 'Polygon',
        coordinates: number[][][]
    },
    properties?: Record<string, any>;
    bbox?: BBOXtype
}

export type GeoJSONMultiPolygon = {
    type: 'Feature',
    geometry: {
        type: 'MultiPolygon',
        coordinates: number[][][][]
    },
    properties?: Record<string, any>;
    bbox?: BBOXtype
}

export type injectImageOptions = {
    imageId: string;
    url: string;
    imageBBOX: BBOXtype;
} & fetchOptionsType;


export type getImageTileOptions = {
    tileBBOX: BBOXtype,
    imageId: string;
    projection: string;
    tileSize?: number;
} & postProcessingOptions & returnResultType;