onEvent('recipes', event => {

    event.custom(
    {
        "type": "create:sequenced_assembly",
        "ingredient": {
          "tag": "createpixelmon:t3_bases"
        },
        "transitionalItem": {
          "item": "createpixelmon:incomplete_quick_ball"
        },
        "sequence": [
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "createpixelmon:incomplete_quick_ball"
              },
              {
                "type": "forge:nbt",
                "item": "pixelmon:poke_ball_lid",
                "nbt": {
                  "PokeBallID": "quick_ball"
                }
              }
            ],
            "results": [
              {
                "item": "createpixelmon:incomplete_quick_ball"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "createpixelmon:incomplete_quick_ball"
              },
              {
                "item": "minecraft:stone_button"
              }
            ],
            "results": [
              {
                "item": "createpixelmon:incomplete_quick_ball"
              }
            ]
          }
        ],
        "results": [
          {
            "item": "pixelmon:poke_ball",
            "count": 1,
            "nbt": {
              "PokeBallID": "quick_ball"
            }
          }
        ],
        "loops": 1
      }
    )
    }
    )