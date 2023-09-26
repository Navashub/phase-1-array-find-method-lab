// code your solution here
function superbowlWin(record, year, result){
    const winYear = record.find(function(games){
        return games.result === "W";
    });
    return winYear ? winYear.year : undefined;
}