import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    changeEditMode = (boolean) => {
        this.setState ({
            editMode: boolean,
        })}

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <p onClick={() => { this.changeEditMode(true) }}>Status: {this.props.status}</p>
                    : <>
                        <input autoFocus={true} onBlur={() => {this.changeEditMode(false)}}
                               value={this.props.status}></input>
                    </>
                }
            </>
        )
    }
}

export default ProfileStatus