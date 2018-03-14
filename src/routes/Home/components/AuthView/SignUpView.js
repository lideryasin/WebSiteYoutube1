import React from 'react';

class SignUpView extends React.Component {

    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group mb-2">
                        <input type="text" style={{ width: "400px", marginRight: "10px" }} className="form-control" placeholder="E-Posta" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Kayıt Ol</button>

                </form>

                <p>Zaten Üye Misiniz <br />
                    Giriş Yapmak İçin <b><u><a href="#" onClick={e => {
                        e.preventDefault(); 
                        this.props.onViewChange(1);
                    }}>Tıklayınız</a></u></b>
                </p>
            </div>
        );
    }

}

export default SignUpView;