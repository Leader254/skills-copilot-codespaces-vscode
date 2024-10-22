function skillsMember(skills) {
    if (!skills || skills.length === 0) {
        console.log("No skills provided.");
    } else {
        console.log("This member has the following skills:");
        skills.forEach((skill, index) => {
            console.log(`${index + 1}. ${skill}`);
        });
    }
}
