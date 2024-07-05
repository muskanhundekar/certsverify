import react from "react";
import './awardscert.css';
import ceo from '../assets/ceosign.png'
import pm from '../assets/pmsign.png'


export default function AwardsCert(
    { username, event_date, designation, emp_id }
) {
    return (
        <div className="award-cert-body">
            <h1 className="award-cert-title1">Certificate</h1>
            <h2 className="award-cert-title2">of Appreciation</h2>
            <h3 className="award-cert-title3">Presented to:</h3>
            <h1 className="award-cert-title1">{username}</h1>
            <div class="sentence-container">
                <span class="sentence">{designation}</span>
                <span class="sentence">{event_date}</span>
                <span class="sentence">Emp Id: {emp_id}</span>
            </div>
            <p className="award-cert-desc">This award is presented to honor and celebrate the sucess of hard <br></br>work and dedication shown by our team mates
            </p>
            <div>
                <div class="CEO">
                    <img src={ceo} alt="sign" height={50} />
                </div>
                <div class="Project Manager">
                    <img src={pm} alt="sign" height={50} />
                </div>
            </div>
        </div>

    );
}