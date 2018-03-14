import React from 'react';

class PasswordReset extends React.Component {

    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group mb-2">
                        <input type="text" style={{ width: "366px", marginRight: "10px" }} className="form-control" placeholder="E-Posta" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Şifremi Resetle</button>

                </form>

                <p>Üye Giriş Yapmak İçin <b><u><a href="#" onClick={e => {
                        e.preventDefault(); 
                        this.props.onViewChange(1);
                    }}>Tıklayınız</a></u></b>
                </p>
            </div>
        );
    }

}

export default PasswordReset;