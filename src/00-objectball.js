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
  
console.log(homeTeamName());

function numPointsScored(playerName) {
    return playerStats(playerName).points
}

function shoeSize(playerName) {
    return playerStats(playerName).shoe
}

function teamColors(teamName) {
    const gameDetails = gameObject()

    for (let team in gameDetails) {

        if (gameDetails[team]["teamName"] === teamName) {
            return gameDetails[team]["colors"]
        }}
}

function teamNames(gameDetails) {
    const gameValues = Object.values(gameDetails)

    return gameValues.map(team => team.teamName)
}

function playerNumbers(teamName) {
    const gameDetails = gameObject()

    for (let team in gameDetails) {

        if (gameDetails[team]["teamName"] === teamName) {
            const playerInfo = Object.values(gameDetails[team]["player"])

            return playerInfo.map(player => player.number)
        }}
}

function playerStats(playerName) {

    const gameDetails = gameObject();
    for (let team in gameDetails) {

        if (gameDetails[team]['player'][playerName]) {
            return gameDetails[team]['player'][playerName]
        }
    }
}

function bigShoeRebounds(gameDetails) {

    let largestShoe = 0
    let largestShoePlayer
    let largestShoeRebounds

    for (let team in gameDetails) {
        for (let player in gameDetails[team]["player"]) {
            const shoeSize = gameDetails[team]["player"][player]["shoe"]
            if (shoeSize > largestShoe) {
                largestShoe = shoeSize
                largestShoePlayer = player
                largestShoeRebounds = gameDetails[team]["player"][player]["rebounds"]
            }
        }
    }
    console.log("player with the largest shoe:", largestShoePlayer)
    return largestShoeRebounds
}

// Bonus Questions

function mostPointsScored(gameDetails) {
    let mostPoints = 0
    let mostPointsPlayer

    for (let team in gameDetails) {
        for (let player in gameDetails[team]["player"]) {
            const points = gameDetails[team]["player"][player]["points"]
            if (points > mostPoints) {
                mostPoints = points
                mostPointsPlayer = player
            }
        }
    }
    return mostPointsPlayer
}

function winningTeam(gameDetails) {
    let mostPoints = 0
    let teamWon = 0

    for (let team in gameDetails) {
        let teamPoints = 0

        for (let player in gameDetails[team]["player"]) {
            const points = gameDetails[team]["player"][player]["points"]
            teamPoints += points
        }
        
        console.log(gameDetails[team]["teamName"], teamPoints, "points")
        if (teamPoints>mostPoints) {
            mostPoints = teamPoints
            teamWon = gameDetails[team]["teamName"]
        }
    }
    return teamWon
}

function playerWithLongestName(gameDetails) {
    let longestName = ""

    for (let team in gameDetails) {

        for (let player in gameDetails[team]["player"]) {
            if (player.length > longestName.length) {
                longestName = player
            }
        }
        
    }
    return longestName
}

// Super Bonus Question

function doesLongNameStealATon(gameDetails) {
    let longestName = ""
    let mostSteals = 0
    let mostStealsPlayer = ""

    for (let team in gameDetails) {

        for (let player in gameDetails[team]["player"]) {
            if (player.length > longestName.length) {
                longestName = player
            }

            playerSteals = gameDetails[team]["player"][player]["steals"]
            if (playerSteals>mostSteals) {
                mostSteals = playerSteals
                mostStealsPlayer = player
            }
        }   
    }
    return longestName === mostStealsPlayer
}

const gameDetails = gameObject();

console.log("numPointsScored:", numPointsScored("Alan Anderson"))
console.log("shoeSize:", shoeSize("Alan Anderson"))
console.log("teamColors:", teamColors("Brooklyn Nets"))
console.log("teamNames:", teamNames(gameDetails))
console.log("playerNumbers:", playerNumbers("Brooklyn Nets"))
console.log("playerStats:", playerStats("Alan Anderson"))
console.log("bigShoeRebounds:", bigShoeRebounds(gameDetails))

console.log("mostPointsScored:", mostPointsScored(gameDetails))
console.log("winningTeam:", winningTeam(gameDetails))
console.log("playerWithLongestName:", playerWithLongestName(gameDetails))

console.log("doesLongNameStealATon:", doesLongNameStealATon(gameDetails))