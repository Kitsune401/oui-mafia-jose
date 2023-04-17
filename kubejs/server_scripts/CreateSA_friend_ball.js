onEvent('recipes', event => {

    event.custom(
    {
        "type": "create:sequenced_assembly",
        "ingredient": {
          "tag": "createpixelmon:t2_bases"
        },
        "transitionalItem": {
          "item": "createpixelmon:incomplete_friend_ball"
        },
        "sequence": [
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "createpixelmon:incomplete_friend_ball"
              },
              {
                "type": "forge:nbt",
                "item": "pixelmon:poke_ball_lid",
                "nbt": {
                  "PokeBallID": "friend_ball"
                }
              }
            ],
            "results": [
              {
                "item": "createpixelmon:incomplete_friend_ball"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "createpixelmon:incomplete_friend_ball"
              },
              {
                "item": "minecraft:stone_button"
              }
            ],
            "results": [
              {
                "item": "createpixelmon:incomplete_friend_ball"
              }
            ]
          }
        ],
        "results": [
          {
            "item": "pixelmon:poke_ball",
            "count": 1,
            "nbt": {
              "PokeBallID": "friend_ball"
            }
          }
        ],
        "loops": 1
      }
    )
    }
    )