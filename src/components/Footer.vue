<template lang="html">
  <div class="container">
    <div class="peases-container">
      <div class="peas">
      </div>
      <div class="peas">
      </div>
    </div>
    <div class="columns-container">
      <div class="column">
        <div class="category">
          <p>About</p>
        </div>
        <div class="column-subcategory ">
          <p>About</p>
          <p>Cookbook</p>
          <p>Press</p>
          <p>Contact</p>
        </div>
      </div>
      <div class="column">
        <div class="category">
          <p>Recipes</p>
        </div>
        <div class="subcategory">
          <div class="column-subcategory">
            <p>Breakfast/Brunch</p>
            <p>Snack</p>
            <p>Appetizer</p>
            <p>Salads</p>
            <p>Soup</p>
          </div>
          <div class="column-subcategory">
            <p>Side Dishes</p>
            <p>Main Dishes</p>
            <p>Desserts</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="articles-column category">
          <p>Articles</p>
        </div>
        <div class="column-subcategory">
          <p>This and That</p>
          <p>Travel</p>
          <p>Our Home</p>
        </div>
      </div>
      <div class="column">
        <div class="contact-category category">
          <p>Contact</p>
        </div>
        <div class="column-subcategory">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Pinterest</p>
          <p>Instagram</p>
          <p>RSS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$font-color: #424242;
$ampersand-color: #9E9E9E;
$peas-color: #90C041;
$hover-color: #53800A;
$background-color: #F5F5F5;
$border-bottom-color: #c9c7c7;

.container {
    font-family: 'Work Sans', sans-serif;
    margin-top: 5%;
    background-color: $background-color;
    padding: 2% 0 5%;

    .peases-container {
        display: flex;
        justify-content: center;
        margin-bottom: 2%;

        .peas {
            width: 1.1em;
            height: 1.1em;
            border-radius: 50%;
            background-color: $peas-color;
        }

        :first-child {
            margin-right: 0.5%;
        }
    }

    .columns-container {
        display: flex;
        justify-content: space-around;
        margin: 0 17.5%;

        .column {
            width: 20%;

            .category {
                color: $hover-color;
                border-bottom: 1px solid $border-bottom-color;
                width: 100%;
                font-size: 1em;
                margin-bottom: 10%;

                p {
                    margin-bottom: 7%;
                }
            }

            .subcategory {
                display: flex;

                :first-child {
                    margin-right: 15%;
                }
            }

            .column-subcategory {
                font-size: 0.8em;

                p {
                    margin-top: 0;

                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}

@media (max-width: 360px) {
  .container {
    margin-top: 0;

    .peases-container {
      margin-top: 5%;
    }

    .columns-container {
      display: block;
      text-align: center;
      width: 100%;
      margin: 0;

      .column {
        width: 100%;

        .category {
          width: 80%;
          margin: 10% auto 3% auto;
          font-size: 1.3em;
          cursor: pointer;

          p {
            margin-bottom: 3%;
          }
        }

        .subcategory {
          display: block;
          text-align: center;
          cursor: pointer;

          :first-child {
            margin-right: 0;
            cursor: pointer;
          }

          .column-subcategory {
            margin: 0;
            cursor: pointer;
          }
        }

        .column-subcategory {
          p {
            margin: 6% 0;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media (min-width: 361px) {
  .container {
    margin-top: 0;

    .peases-container {
      margin-top: 5%;

      .peas {
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          background-color: $peas-color;
      }

      :first-child {
          margin-right: 1%;
      }
    }

    .columns-container {
      display: block;
      text-align: center;
      width: 100%;
      margin: 0;

      .column {
        width: 100%;

        .category {
          width: 80%;
          margin: 8% auto 3% auto;
          font-size: 1.3em;
          cursor: pointer;

          p {
            margin-bottom: 3%;
          }
        }

        .subcategory {
          display: block;
          text-align: center;

          :first-child {
            margin-right: 0;
          }

          .column-subcategory {
            margin: 0;
          }
        }

        .column-subcategory {
          p {
            margin: 5.5% 0;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .container {
    margin-top: 3rem;

    .peases-container {
      margin: 0 0 4% 0;

      .peas {
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          background-color: $peas-color;
      }

      :first-child {
          margin-right: 0.3%;
      }
    }

    .columns-container {
      display: block;
      text-align: center;
      width: 100%;
      margin: 0;

      .column {
        width: 100%;

        .category {
          width: 80%;
          margin: 3% auto 3% auto;
          font-size: 1.3em;

          p {
            margin-bottom: 1.5%;
          }
        }

        .subcategory {
          display: block;
          text-align: center;

          :first-child {
            margin-right: 0;
          }

          .column-subcategory {
            margin: 0;
          }
        }

        .column-subcategory {
          p {
            margin: 3% 0;
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .container {
    padding-bottom: 0;

    .peases-container {
      margin-bottom: 1%;
    }

    .columns-container {
      display: flex;

      .column {
        .category {
          font-size: 1.5em;
          margin-bottom: 7%;
        }

        .column-subcategory {
          font-size: 0.8em;

          P {
            margin-bottom: 5%;
          }
        }
      }
    }
  }
}

@media (min-width: 1280px) {
  .container {
    padding: 0 5%;

    .peases-container {
      .peas {
        margin-top: 2%;
      }
    }
  }
}

@media (min-width: 1920px) {
  .container {
    .peases-container {
      .peas {
        width: 2.5em;
        height: 2.5em;
      }
    }

    .columns-container {
      .column {
        .category {
          font-size: 3em;
        }

        .column-subcategory {
          font-size: 1.7em;

          p {
            margin-bottom: 1.7em;
          }
        }
      }
    }
  }
}

@media (min-width: 3840px) {
  .container {
    .peases-container {
      .peas {
        width: 6em;
        height: 6em;
      }
    }

    .columns-container {
      .column {
        .category {
          font-size: 6em;
        }

        .column-subcategory {
          font-size: 3.4em;

          p {
            margin-bottom: 1.7em;
          }
        }
      }
    }
  }
}
</style>
