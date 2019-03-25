const format = (arr) => {
      
    var start = 0;
    var end = 33;
    var player;
    var output = [];
  
    while(end <= arr.length){
      player = format_deeper(arr.slice(start, end));
      output.push(format_even_deeper(player));
      start = end-1;
      end += 32;
    }
  
    return output;
      
  }
  
  const format_deeper = (arr) => {
    var output = [];
    arr.map(str => {
      output.push(str.split('data-stat="'));
    });
  
    return output;
  };
  
  const format_even_deeper = (arr) => {
  
    var data = {};
    var regex = />.*?</
  
    data.info_player = arr[1][1].slice(40).match(regex)[0].slice(1, -1); 
    if(arr[2][1].length > 40){
      data.info_team = arr[2][1].slice(40).match(regex)[0].slice(1, -1);
    } else {
      data.info_team = arr[2][1].match(regex)[0].slice(1, -1);
    }
    data.info_position = arr[3][1].match(regex)[0].slice(1, -1); 
    data.info_age = arr[4][1].match(regex)[0].slice(1, -1);
    data.games_played = arr[5][1].match(regex)[0].slice(1, -1) * 1;
    data.games_started = arr[6][1].match(regex)[0].slice(1, -1) * 1;
    data.pass_completed = arr[7][1].match(regex)[0].slice(1, -1) * 1;
    data.pass_attempted = arr[8][1].match(regex)[0].slice(1, -1) * 1;
    data.pass_yards = arr[9][1].match(regex)[0].slice(1, -1) * 1;
    data.pass_touchdowns = arr[10][1].match(regex)[0].slice(1, -1) * 1;
    data.pass_interceptions = arr[11][1].match(regex)[0].slice(1, -1) * 1;
    data.rush_attempts = arr[12][1].match(regex)[0].slice(1, -1) * 1;
    data.rush_yards = arr[13][1].match(regex)[0].slice(1, -1) * 1;
    data.rush_yardsPerAttempt = arr[14][1].match(regex)[0].slice(1, -1) * 1;
    data.rush_touchdowns = arr[15][1].match(regex)[0].slice(1, -1) * 1;
    data.reception_targets= arr[16][1].match(regex)[0].slice(1, -1) * 1;
    data.reception_receptions= arr[17][1].match(regex)[0].slice(1, -1) * 1;
    data.reception_yards= arr[18][1].match(regex)[0].slice(1, -1) * 1;
    data.reception_yardsPerReception= arr[19][1].match(regex)[0].slice(1, -1) * 1;
    data.reception_touchdowns= arr[20][1].match(regex)[0].slice(1, -1) * 1;
    data.fumble_fumbles= arr[21][1].match(regex)[0].slice(1, -1) * 1;
    data.fumble_fumblesLost= arr[22][1].match(regex)[0].slice(1, -1) * 1;
    data.scoring_touchdowns= arr[23][1].match(regex)[0].slice(1, -1) * 1;
    data.scoring_twoPointConversion= arr[24][1].match(regex)[0].slice(1, -1) * 1;
    data.scoring_twoPointConversionPasses= arr[25][1].match(regex)[0].slice(1, -1) * 1;
    data.fantasy_standardPoints= arr[26][1].match(regex)[0].slice(1, -1) * 1;
    data.fantasy_pprPoints= arr[27][1].match(regex)[0].slice(1, -1) * 1;
    data.fantasy_vbd= arr[30][1].match(regex)[0].slice(1, -1) * 1;
    data.fantasy_positionalRanking= arr[31][1].match(regex)[0].slice(1, -1) * 1;
    data.fantasy_overallRanking= arr[32][1].match(regex)[0].slice(1, -1) * 1;
  
    return data;
  
  };
  
  
  
  module.exports = format;