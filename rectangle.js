/*
Avec cette fonction, on défini une salle par 4 points
Dans l'ordre
1 : nord ouest
2 : nord est
3 : sud ouest
4 : sud est
*/
function isPointInRectangle(long1,lat1,long2,lat2,long3,lat3,long4,lat4,long,lat){
  return long<long1+((long2-long1)/(lat2-lat1))*(lat-lat1) && long>long3+((long4-long3)/(lat4-lat3))*(lat-lat3) && lat>lat1+((lat3-lat1)/(long1-long3))*(long-long3) && lat<lat2+((lat4-lat2)/(long4-long2))*(long-long2)
}
