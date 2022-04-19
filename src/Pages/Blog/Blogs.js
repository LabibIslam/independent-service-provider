import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2>Difference between authorization and authentication?</h2>
                <p>Authentication is the process of verifying who someone is, whereas Authorization is the process of verifying what specific applications, files, and data a user has access to.</p>
            </div>
            <div>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase is Google product. Firebase is a manages all data real-time in the database. So we can easily and quickly get access to all tha saved data. We can use cards, retina scans, voice recognition, and fingerprints to implement authentication.</p>
            </div>
            <div>
                <h2>What other services does firebase provide other than authentication?</h2>
                <p>Firebase has a open source backend platform. Also provides a hosting service, and many more.</p>
            </div>
        </div>
    );
};

export default Blogs;