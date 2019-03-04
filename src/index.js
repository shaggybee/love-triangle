/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count_triangl = 0;
  if (preferences.length < 3) return count_triangl;
  
  for (var i = 0; i < preferences.length; i++){
    var first_spichonees, second_spichonees, third_spichonees;
    
    if ((first_spichonees = preferences[i]) - 1 == i) continue;

    if ((second_spichonees = preferences[first_spichonees - 1]) == first_spichonees) continue;

    if ((third_spichonees = preferences[second_spichonees - 1]) == second_spichonees) continue;

    if ( i == (third_spichonees - 1)) count_triangl += 1;
  }

  return count_triangl / 3;
}