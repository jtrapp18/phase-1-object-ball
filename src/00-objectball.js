function gameObject() {
    const gameDetails = {
        home: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
            player: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 17,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornet",
            colors: "Turquoise, Purple",
            player: {
                "Jeff Adrien":
                {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo":
                {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop":
                {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon":
                {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood":
                {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            },
        },
    }

    return gameDetails
}

function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }

function numPointsScored(playerName) {
    return playerStats(playerName).points
}

function shoeSize(playerName) {
    return playerStats(playerName).shoe
}

function teamColors(teamName) {
    const gameDetails = gameObject()
    const gameArr = Object.values(gameDetails)

    // combine dictionaries together for all players
    const teamColors = gameArr.reduce((accumulator, gameArr) => {
        const newEntry =  { [gameArr.teamName]: gameArr.colors };
        return { ...accumulator, ...newEntry };
        }, {});

    return teamColors[teamName]
}

function teamNames() {
    const gameDetails = gameObject()
    const gameValues = Object.values(gameDetails)

    return gameValues.map(team => team.teamName)
}

function playerNumbers(teamName) {
    const gameDetails = gameObject();

    function teamMatch(element, index, array) {
        return element.teamName === teamName;
    }

    const gameArr = Object.values(gameDetails);
    const teamArr = gameArr.find(teamMatch);

    const playerInfo = Object.values(teamArr.player)

    return playerInfo.map(player => player.number)
}

function combinedPlayerObj() {
    const gameDetails = gameObject();
    const gameArr = Object.values(gameDetails);
    const playerArr = gameArr.map(team => team.player)

    // combine dictionaries together for all players
    const combinedPlayers = playerArr.reduce((accumulator, playerArr) => {
    return { ...accumulator, ...playerArr };
    }, {});

    return combinedPlayers
}

function playerStats(playerName) {
    const combinedPlayers = combinedPlayerObj()

    return combinedPlayers[playerName]
}

function bigShoeRebounds() {

    let largestShoe = 0
    let largestShoePlayer
    let largestShoeRebounds

    const combinedPlayers = combinedPlayerObj()

    for (let player in combinedPlayers) {
        const shoeSize = combinedPlayers[player]["shoe"]
        if (shoeSize > largestShoe) {
            largestShoe = shoeSize
            largestShoePlayer = player
            largestShoeRebounds = combinedPlayers[player]["rebounds"]
        }
    }    

    console.log("player with the largest shoe:", largestShoePlayer)
    return largestShoeRebounds
}

// Bonus Questions

function mostPointsScored() {
    let mostPoints = 0
    let mostPointsPlayer

    const combinedPlayers = combinedPlayerObj()

    for (let player in combinedPlayers) {
        const points = combinedPlayers[player]["points"]
        if (points > mostPoints) {
            mostPoints = points
            mostPointsPlayer = player
        }
    }

    return mostPointsPlayer
}

function winningTeam() {
    const gameDetails = gameObject()
    let mostPoints = 0
    let teamWon = 0

    for (let team in gameDetails) {

        const playerArr = Object.values(gameDetails[team]["player"])
        
        const teamPointsTotal = playerArr.reduce((init, element) => init + element.points, 0);
        console.log(`Team ${gameDetails[team].teamName}: ${teamPointsTotal}`)

        if (teamPointsTotal>mostPoints) {
            mostPoints = teamPointsTotal
            teamWon = gameDetails[team].teamName
        }
        console.log(teamWon)
    }
    return teamWon
}

function playerWithLongestName() {
    let longestName = ""

    const combinedPlayers = combinedPlayerObj()

    for (let player in combinedPlayers) {
        if (player.length > longestName.length) {
            longestName = player
        }
    }

    return longestName
}

// Super Bonus Question

function doesLongNameStealATon() {
    let longestName = ""
    let mostSteals = 0
    let mostStealsPlayer = ""

    const combinedPlayers = combinedPlayerObj()

    for (let player in combinedPlayers) {
        if (player.length > longestName.length) {
            longestName = player
        }

        playerSteals = combinedPlayers[player]["steals"]
        if (playerSteals>mostSteals) {
            mostSteals = playerSteals
            mostStealsPlayer = player
        }
    }   

    return longestName === mostStealsPlayer
}

// const gameDetails = gameObject();

// console.log(combinedPlayerObj())
console.log("homeTeamName", homeTeamName());
console.log("numPointsScored:", numPointsScored("Alan Anderson"))
console.log("shoeSize:", shoeSize("Alan Anderson"))
console.log("teamColors:", teamColors("Brooklyn Nets"))
console.log("teamNames:", teamNames())
console.log("playerNumbers:", playerNumbers("Brooklyn Nets"))
console.log("playerStats:", playerStats("Alan Anderson"))
console.log("bigShoeRebounds:", bigShoeRebounds())

console.log("mostPointsScored:", mostPointsScored())
console.log("winningTeam:", winningTeam())
console.log("playerWithLongestName:", playerWithLongestName())

console.log("doesLongNameStealATon:", doesLongNameStealATon())