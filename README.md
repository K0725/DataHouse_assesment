# Data House Assessment

In this task, we are tasked to compute and return compatibility scores for each applicant in JSON format.

I've decided to calculate the compatibility score as the sum of the absolute differences between each attribute of the applicant and the corresponding average attribute of the team. Moreover, since the range is limited to [0, 1], I normalize the data by `1 - (diff / 40)`. 
The number 40 comes from the maximum difference that you can expect assuming that the maximum attribute is 10 and there are 4 attributes. 

I'm also utilizing the `JSON.stringify()` method to convert the `scoredApplicants` array into JSON format. Below is the expected output from my console utilizing the same datasets from the problem. 

```json
[
  {
    "name": "John",
    "attributes": {
      "intelligence": 4,
      "strength": 5,
      "endurance": 2,
      "spicyFoodTolerance": 1
    },
    "compatibilityScore": 0.825
  },
  {
    "name": "Jane",
    "attributes": {
      "intelligence": 7,
      "strength": 4,
      "endurance": 3,
      "spicyFoodTolerance": 2
    },
    "compatibilityScore": 0.8416666666666667
  },
  {
    "name": "Joe",
    "attributes": {
      "intelligence": 1,
      "strength": 1,
      "endurance": 1,
      "spicyFoodTolerance": 10
    },
    "compatibilityScore": 0.6166666666666667
  }
]
