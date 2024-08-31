export const DEFAULT_PLACE = {
  name: "Ranchi",
  place_id: "ranchi",
  adm_area1: "Jharkhand",
  adm_area2: "Ranchi",
  country: "India",
  lat: "23.34316N",
  lon: "85.3094E",
  timezone: "Asia/Kolkata",
  type: "settlement",
};


export const MEASUREMENT_SYSTEMS={
  AUTO:'auto',
  METRIC:'metric',
  UK:'uk',
  US:'us',
  CA:'ca'
};

export const UNITS={
  metric:{
    temperature:'°C',
    precipitation:'mm/h',
    wind_speed:'m/s',
    visibility:'km',
    humidity:'%',
    uv_index:'',
    cloud_cover:'%'
  },
  us:{
    temperature:'°F',
    precipitation:'in/h',
    wind_speed:'mph',
    visibility:'mi',
    humidity:'%',
    uv_index:'',
    cloud_cover:'%'
  },
  uk:{
    temperature:'°C',
    precipitation:'mm/h',
    wind_speed:'mph',
    visibility:'mi',
    humidity:'%',
    uv_index:'',
    cloud_cover:'%'
  },

  ca:{
    temperature:'°C',
    precipitation:'mm/h',
    wind_speed:'km/h',
    visibility:'km',
    humidity:'%',
    uv_index:'',
    cloud_cover:'%'
  },
}