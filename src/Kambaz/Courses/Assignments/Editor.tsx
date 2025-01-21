export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
            <br />
            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>
                        <br/>
                        <br/>
                        <b>Online Entry Options</b>
                        <br/>
                        <input type="checkbox" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label>
                        <br/>
                        <input type="checkbox" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label>
                        <br/>
                        <input type="checkbox" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label>
                        <br/>
                        <input type="checkbox" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label>
                        <br/>
                        <input type="checkbox" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Uploads</label>
                        <br/>
                        <br/>
                    </td>
                </tr>

                <tr>
                    <td align="right">
                        <label htmlFor="wd-assign-to">Assign</label><br></br>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label>
                        <input type="text"
                               value="Everyone"
                               id="wd-assign-to"/>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-due-date">Due</label><br></br>
                        <input type="date"
                               value="2024-05-13"
                               id="wd-due-date"/>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                    <label htmlFor="wd-available-from">Available from</label><br></br>
                        <input type="date"
                               value="2024-05-06"
                               id="wd-available-from"/>
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label><br></br>
                        <input type="date"
                               value="2024-05-20"
                               id="wd-available-until"/>
                    </td>
                    <table/>
                </tr>
                </tbody>
            </table>
            <hr/>
            <table align="right">
                <tbody>
                <tr>
                    <td align="right">
                        <button>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}