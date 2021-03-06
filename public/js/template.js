var appTemplates = {

    asterisk: '**',

    getNewNoteTemp: function () {
            return  `<div class="note-container container">    
                        <div class="row">    
                            <div class="col s12 m10 offset-m1">
                                <div class="edit-title-container create-note-title">
                                    <label class="new-note-label">Title:</label>
                                    <input type="text" id="new-title" placeholder="ex. Today's Class" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 m10 offset-m1">
                                <div class="editing-note-container create-note-content">
                                    <div class="tips">
                                        Tip: Hightlight word with backticks. ${this.asterisk}highlighted word${this.asterisk} & click on title to edit before saving note.
                                        <a href="#" class="hide-tip"><i class="material-icons right">done</i></a>
                                    </div>
                                    <div class="note-error-message">PLEASE MAKE SURE NOTE TO LEAVE A BLANK NOTE!</div>
                                    <div class="highlighted-error">PLEASE MAKE SURE ALL TICKS ARE INCLUDED IF HIGHLIGHTING.</div>
                                    <label class="new-note-label">Note:</label>
                                    <textarea id="new-note" class="note-editor" placeholder="ex. Today was fun. I learned nothing."></textarea>
                                    <div class="create-button-container"><button class="create-note">Create</button></div>
                                </div>
                            </div>
                        </div>
                    </div>`
    },

    getEditTemp: function (noteId, title, content) {
        return `<div class="note-id">${noteId}</div>
                <div class="container note-container">
                    <div class="row">
                        <div class="col s12 m10 offset-m1">
                            <div class="note-title">${title}</div>    
                            <div class="edit-title-container" style="display: none;">
                                <input type="text" id="edit-title" />
                                <button type="submit" id="update-title" class="update-title-button">Update</button>
                                <button id="cancel-update" class="update-title-button">Cancel</button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 m10 offset-m1">
                            <div class="note hide-note"></div>
                            <div class="editing-note-container">
                                <div class="tips">
                                    Tip: Hightlight word with backticks. ${this.asterisk}highlighted word${this.asterisk} & click on title to edit before saving note.
                                    <a href="#" class="hide-tip"><i class="material-icons right">done</i></a>
                                </div>  
                                <div class="note-error-message">PLEASE MAKE SURE NOTE TO LEAVE A BLANK NOTE!</div>
                                <div class="highlighted-error">PLEASE MAKE SURE ALL TICKS ARE INCLUDED IF HIGHLIGHTING.</div>
                                <textarea id="edit-note" class="note-editor">${content}</textarea>
                                <div class="save-button-container"><button class="save-note">Save</button></div>
                            </div>
                        </div>
                    </div>
                </div>`
    }
}