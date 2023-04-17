onEvent('recipes', event => {

    event.custom(
    {
        "type": "create:sequenced_assembly",
        "ingredient": {
          "item": "pixelmon:wooden_base"
        },
        "transitionalItem": {
          "item": "createpixelmon:incomplete_ancient_poke_ball"
        },
        "sequence": [
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "createpixelmon:incomplete_ancient_poke_ball"
              },
              {
                "type": "forge:nbt",
                "item": "pixelmon:poke_ball_lid",
                "nbt": {
                  "PokeBallID": "ancient_poke_ball"
                }
              }
            ],
            "results": [
              {
                "item": "createpixelmon:incomplete_ancient_poke_ball"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "createpixelmon:incomplete_ancient_poke_ball"
              },
              {
                "item": "minecraft:stone_button"
              }
            ],
            "results": [
              {
                "item": "createpixelmon:incomplete_ancient_poke_ball"
              }
            ]
          }
        ],
        "results": [
          {
            "item": "pixelmon:poke_ball",
            "count": 1,
            "nbt": {
              "PokeBallID": "ancient_poke_ball"
            }
          }
        ],
        "loops": 1
      }
    )
    }
    )