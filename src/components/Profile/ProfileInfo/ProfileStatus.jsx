import React from 'react';

class ProfileStatus extends React.Component {
    statusRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.userStatus,
    }

    changeStatus = () => {
        let newStatus = this.statusRef.current.value;
        this.setState ({
            status: newStatus
        })
    }

    changeEditMode = (boolean) => {
        this.setState ({
            editMode: boolean,
        })
        if (boolean === false) {
            let newStatus = this.statusRef.current.value;
            this.props.updateStatus(newStatus);
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <p onClick={() => { this.changeEditMode(true) }}>Status: {this.props.userStatus}</p>
                    : <>
                        <input autoFocus={true} onBlur={() => { this.changeEditMode(false) }}
                               onChange={ this.changeStatus }
                               ref={this.statusRef}
                               value={this.state.status}></input>
                    </>
                }
            </>
        )
    }
}

export default ProfileStatus