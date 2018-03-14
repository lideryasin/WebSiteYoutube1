import React, { Component } from 'react';


const LoginView = ({onViewChange}) => (

    <div>
        <form className="form-inline">
            <div className="form-group mb-2">
                <input type="text" className="form-control" placeholder="E-Posta" />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <input type="password" className="form-control" placeholder="Şifre" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Giriş Yap</button>
            <a href="#" onClick={e => {
                e.preventDefault();
                onViewChange(3);
            }}>Şifremi Unuttum</a>
        </form>

        <p>Henüz Üye Olmadınız mı? <br />
            Ücretsiz Kayıt olmak için <b><u><a href="#" onClick={e =>{
                e.preventDefault(); //href bakma ben  aptığıma bak
                onViewChange(2);
            }}>Tıklayınız</a></u></b>
        </p>
    </div>


)

export default LoginView;