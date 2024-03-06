function calculateAverageAttributes(members) {

    // Creating variables for holding each attribute with average value
    let avgAttributes = {intelligence: 0, strength: 0, endurance: 0, spicyFoodTolerance: 0};
    members.forEach(member => {
        avgAttributes.intelligence += member.attributes.intelligence;
        avgAttributes.strength += member.attributes.strength;
        avgAttributes.endurance += member.attributes.endurance;
        avgAttributes.spicyFoodTolerance += member.attributes.spicyFoodTolerance;
    });

    // calculate each variable by dividing its length
    for (let attr in avgAttributes) {
        avgAttributes[attr] /= members.length;
    }

    return avgAttributes;
}

// compute the compatibility score for each applicaiton
function calculateCompatibilityValue(members, applicants) {
    // getting the average attributes of the team members
    
    let avgAttributes = calculateAverageAttributes(members);
    applicants.forEach(applicant => {
        let diff = 0;
        for (let attr in avgAttributes) {
            // difference between the applicant's attribute and the average attribute of the team
            diff += Math.abs(applicant.attributes[attr] - avgAttributes[attr]);
            
        }
        console.log(diff)

        // Normalizing the score to be between 0 and 1 maximum diff is 40 
        applicant.compatibilityScore = 1 - (diff / 40);
    });

    return applicants;
}
let data = {
"team": [
    {"name": "Eddie", "attributes": {"intelligence": 1, "strength": 5, "endurance": 3, "spicyFoodTolerance": 1}},
    {"name": "Will", "attributes": {"intelligence": 9, "strength": 4, "endurance": 1, "spicyFoodTolerance": 6}},
    {"name": "Mike", "attributes": {"intelligence": 3, "strength": 2, "endurance": 9, "spicyFoodTolerance": 5}}
],
"applicants": [
    {"name": "John", "attributes": {"intelligence": 4, "strength": 5, "endurance": 2, "spicyFoodTolerance": 1}},
    {"name": "Jane", "attributes": {"intelligence": 7, "strength": 4, "endurance": 3, "spicyFoodTolerance": 2}},
    {"name": "Joe", "attributes": {"intelligence": 1, "strength": 1, "endurance": 1, "spicyFoodTolerance": 10}}
]
};

const scoredApplicants = calculateCompatibilityValue(data['team'], data['applicants']);
console.log(JSON.stringify(scoredApplicants, null, 2));