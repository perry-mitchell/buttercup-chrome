"use strict";

const React = require("react");

const ArchiveEntryForm = require("./ArchiveEntryForm");

class WebDAVArchiveEntryForm extends ArchiveEntryForm {

    constructor(props) {
        super(props);
        this.state.type = "webdav";
    }

    renderFormContents() {
        return <div>
            {super.renderFormContents()}
            <label>
                WebDAV address:
                <input type="text" name="webdav_address" value={this.state.webdav_address} onChange={this.handleChange} />
            </label>
            <label>
                WebDAV username (blank for none):
                <input type="text" name="webdav_username" value={this.state.webdav_username} onChange={this.handleChange} />
            </label>
            <label>
                WebDAV password (blank for none):
                <input type="password" name="webdav_password" value={this.state.webdav_password} onChange={this.handleChange} />
            </label>
        </div>
    }

}

module.exports = WebDAVArchiveEntryForm;