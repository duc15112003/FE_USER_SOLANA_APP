import React from "react";
import './user_infor.css';

const UserInfor = () =>{
    return(
        <div className="user-infor">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3 ">
                        <div className="user-controll d-flex flex-column">
                            <div className="user-img">
                                <div className="position-relative">
                                    <div className="control-img">
                                        <img
                                            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="edit-img-profile">
                                        <i className="bi bi-pencil-fill"></i>
                                    </div>
                                    <input className="d-none" type="file"/>
                                </div>
                            </div>
                            <p className="text-center">Nhan123</p>
                            <div className="tab-dasboard">
                                <ul className="nav nav-tabs flex-column" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-bs-toggle="tab" href="#menu1"><i
                                            class="bi bi-people-fill me-2"></i>Thông tin người dùng</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#menu2"><i
                                            className="bi bi-stickies-fill me-2"></i> Bài đăng của bạn</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#menu3"><i
                                            className="bi bi-heart-fill me-2"></i> Đã tham gia khảo sát</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#menu4"><i
                                            className="bi bi-bell-fill me-2"></i> Thông báo</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#menu5"><i
                                            className="bi bi-gear-fill me-2"></i> Cài đặt</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="out-account">
                                <ul className="nav nav-tabs flex-column">
                                    <li><a className="nav-link" href="#" ><i className="bi bi-box-arrow-left me-2"></i> Đăng xuất</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9">
                        <div className="tab-content">
                            <div id="menu1" className="tab-pane active">
                                <h2 className="title-name mb-3">Thông tin người dùng</h2>
                                <div className="row mb-3">
                                    <h5>Thông tin cơ bản</h5>
                                    <div className="col-12">
                                        <div className="form-user-profile">
                                            <form>
                                                <div className="row">
                                                    <div className="input-normal d-flex flex-column col-6">
                                                        <label>Họ</label>
                                                        <input type="text"/>
                                                    </div>
                                                    <div className="input-normal d-flex flex-column col-6">
                                                        <label>Tên</label>
                                                        <input type="text"/>
                                                    </div>
                                                    <div className="input-normal d-flex flex-column col-6">
                                                        <label>Ngày sinh</label>
                                                        <input type="date"/>
                                                    </div>
                                                    <div className="input-normal d-flex flex-column col-6">
                                                        <label>Số điện thoại</label>
                                                        <input type="text"/>
                                                    </div>
                                                    <div className="input-normal d-flex flex-column col-6">
                                                        <label>Địa chỉ</label>
                                                        <input type="text"/>
                                                    </div>
                                                    <div className="input-normal d-flex flex-column col-6">
                                                        <label>Email</label>
                                                        <input type="email"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="container-button-infor-user">
                                                            <button>Xác nhận</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <h5>Đổi mật khẩu</h5>
                                    <div className="col-12">
                                        <div className="form-user-profile">
                                            <form>
                                                <div className="row">
                                                    <div className="input-normal d-flex flex-column col-6">
                                                        <label>Mật khẩu cũ</label>
                                                        <input type="password"/>
                                                    </div>
                                                    <div className="input-normal d-flex flex-column col-6">
                                                        <label>Mật khẩu mới</label>
                                                        <input type="password"/>
                                                    </div>
                                                    <div className="input-normal d-flex flex-column col-6">
                                                        <label>Xác nhận lại mật khẩu</label>
                                                        <input type="password"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="container-button-infor-user">
                                                            <button>Đổi mật khẩu</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu2" className="tab-pane fade">
                                <h2 className="title-name mb-3">Bài đăng của bạn</h2>
                                <div className="row ideas">
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu3" className="tab-pane fade">
                                <h2 className="title-name mb-3">Đã tham gia khảo sát</h2>
                                <div className="row ideas">
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="box-idea position-relative">
                                            <a href="ideas/details">
                                                <div className="inside-box-idea position-relative">
                                                    <div>
                                                        <img className="img-idea"
                                                             src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                                             alt="photo"/>
                                                    </div>
                                                    <div
                                                        className="idea-info d-flex flex-column justify-content-between">
                                                        <div className="user-info-of-idea d-block align-items-center">
                                                            <div className="the-number d-block">
                                                                <div className="quantity float-start">
                                                                    <span className="me-2">50/100</span>
                                                                    <i className="bi bi-clipboard2-check"></i>
                                                                </div>
                                                                <div className="award float-end">
                                                                    <span className="me-2">20000</span>
                                                                    <i className="bi bi-wallet2"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="idea-infor-user">
                                                            <div className="title">
                                                                <h3>CATEGORY IDEA</h3>
                                                                <h1>HOME DESIGN CONSULTATION SERVICES, hihij, hodhqowd
                                                                    bdwhwk hjdwi</h1>
                                                            </div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Aliquid autem
                                                                    cupiditate dolorum ea error est, eum, fugit hic
                                                                    laboriosam mollitia
                                                                    optio
                                                                    pariatur perferendis quas quibusdam sed sequi
                                                                    tempore voluptatibus!
                                                                    Accusamus aspernatur autem culpa cupiditate debitis
                                                                    dolore
                                                                    exercitationem
                                                                    facere id labore molestiae nemo officia perspiciatis
                                                                    quaerat qui ratione
                                                                    tempora, tempore ullam, unde veritatis,
                                                                    voluptatibus. Ea, excepturi
                                                                    facere
                                                                    ipsum molestiae mollitia neque obcaecati quidem
                                                                    ratione reiciendis unde!
                                                                    Consequatur exercitationem, expedita id incidunt
                                                                    iste iusto minus modi
                                                                    nobis
                                                                    nostrum nulla odit optio pariatur perferendis
                                                                    placeat rem rerum
                                                                    voluptate?
                                                                    At eveniet molestiae quis soluta tempora? Aut
                                                                    doloribus, harum laborum
                                                                    libero obcaecati quod repellat voluptatem.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu4" className="tab-pane fade">
                                <h2 className="title-name mb-3">Thông báo</h2>
                                <div className="row">
                                    <div className="col-12">
                                        <div>
                                            <div className="notifications row">
                                                <div className="col-12">
                                                    <p>15 giờ 23 phút Hôm nay</p>
                                                    <div className="box-noti">
                                                        <h5><i className="bi bi-info-square me-2 text-primary"></i>
                                                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur blanditiis corporis, ipsa minus molestias nam officia officiis quisquam repudiandae sed, ullam vel velit. Aut autem, dolorem enim harum maiores neque quae. Ab assumenda aut consequatur hic illum, impedit minima nemo porro quo repellat! Ab alias animi dicta est eveniet magnam nostrum omnis optio, placeat quisquam. Aspernatur corporis dolorum ducimus excepturi, facere, facilis hic laboriosam nesciunt quasi repellendus repudiandae sunt, ullam vel. Assumenda commodi dignissimos eius excepturi, explicabo facere hic omnis possimus provident, quam quisquam vitae? Amet consequuntur ea enim ex facilis ipsa iste maxime, molestias soluta temporibus velit voluptatum.</span>
                                                        </h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit. Accusamus animi, assumenda blanditiis commodi
                                                            consectetur consequatur dolores eaque hic illum ipsum iste
                                                            labore magni minima non, officia repellat, saepe sint
                                                            voluptatibus? A adipisci assumenda, beatae dicta dolorem
                                                            ducimus earum id incidunt iste iure laborum pariatur
                                                            perferendis, placeat quaerat quam quibusdam quidem ratione,
                                                            reiciendis rem saepe suscipit temporibus vero voluptate.
                                                            Accusantium amet architecto dolore doloremque eos expedita
                                                            fuga id iste modi necessitatibus nisi nostrum obcaecati quis
                                                            quod quos reiciendis, suscipit. Atque dicta dolor doloribus
                                                            eius molestias nisi nobis odio, officiis praesentium,
                                                            reiciendis ut voluptatibus. Distinctio dolores illo illum
                                                            labore provident quam rerum? </p>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p>15 giờ 23 phút 28 Tháng 7, 2024</p>
                                                    <div className="box-noti">
                                                        <h5><i
                                                            className="bi bi-exclamation-triangle me-2 text-warning"></i>
                                                            <span>HOME</span></h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p>15 giờ 23 phút 28 Tháng 7, 2024</p>
                                                    <div className="box-noti">
                                                        <h5><i
                                                            className="bi bi-exclamation-triangle me-2 text-warning"></i>
                                                            <span>HOME</span></h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p>15 giờ 23 phút Hôm nay</p>
                                                    <div className="box-noti">
                                                        <h5><i className="bi bi-info-square me-2 text-primary"></i>
                                                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur blanditiis corporis, ipsa minus molestias nam officia officiis quisquam repudiandae sed, ullam vel velit. Aut autem, dolorem enim harum maiores neque quae. Ab assumenda aut consequatur hic illum, impedit minima nemo porro quo repellat! Ab alias animi dicta est eveniet magnam nostrum omnis optio, placeat quisquam. Aspernatur corporis dolorum ducimus excepturi, facere, facilis hic laboriosam nesciunt quasi repellendus repudiandae sunt, ullam vel. Assumenda commodi dignissimos eius excepturi, explicabo facere hic omnis possimus provident, quam quisquam vitae? Amet consequuntur ea enim ex facilis ipsa iste maxime, molestias soluta temporibus velit voluptatum.</span>
                                                        </h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit. Accusamus animi, assumenda blanditiis commodi
                                                            consectetur consequatur dolores eaque hic illum ipsum iste
                                                            labore magni minima non, officia repellat, saepe sint
                                                            voluptatibus? A adipisci assumenda, beatae dicta dolorem
                                                            ducimus earum id incidunt iste iure laborum pariatur
                                                            perferendis, placeat quaerat quam quibusdam quidem ratione,
                                                            reiciendis rem saepe suscipit temporibus vero voluptate.
                                                            Accusantium amet architecto dolore doloremque eos expedita
                                                            fuga id iste modi necessitatibus nisi nostrum obcaecati quis
                                                            quod quos reiciendis, suscipit. Atque dicta dolor doloribus
                                                            eius molestias nisi nobis odio, officiis praesentium,
                                                            reiciendis ut voluptatibus. Distinctio dolores illo illum
                                                            labore provident quam rerum? </p>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p>15 giờ 23 phút Hôm nay</p>
                                                    <div className="box-noti">
                                                        <h5><i className="bi bi-info-square me-2 text-primary"></i>
                                                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur blanditiis corporis, ipsa minus molestias nam officia officiis quisquam repudiandae sed, ullam vel velit. Aut autem, dolorem enim harum maiores neque quae. Ab assumenda aut consequatur hic illum, impedit minima nemo porro quo repellat! Ab alias animi dicta est eveniet magnam nostrum omnis optio, placeat quisquam. Aspernatur corporis dolorum ducimus excepturi, facere, facilis hic laboriosam nesciunt quasi repellendus repudiandae sunt, ullam vel. Assumenda commodi dignissimos eius excepturi, explicabo facere hic omnis possimus provident, quam quisquam vitae? Amet consequuntur ea enim ex facilis ipsa iste maxime, molestias soluta temporibus velit voluptatum.</span>
                                                        </h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit. Accusamus animi, assumenda blanditiis commodi
                                                            consectetur consequatur dolores eaque hic illum ipsum iste
                                                            labore magni minima non, officia repellat, saepe sint
                                                            voluptatibus? A adipisci assumenda, beatae dicta dolorem
                                                            ducimus earum id incidunt iste iure laborum pariatur
                                                            perferendis, placeat quaerat quam quibusdam quidem ratione,
                                                            reiciendis rem saepe suscipit temporibus vero voluptate.
                                                            Accusantium amet architecto dolore doloremque eos expedita
                                                            fuga id iste modi necessitatibus nisi nostrum obcaecati quis
                                                            quod quos reiciendis, suscipit. Atque dicta dolor doloribus
                                                            eius molestias nisi nobis odio, officiis praesentium,
                                                            reiciendis ut voluptatibus. Distinctio dolores illo illum
                                                            labore provident quam rerum? </p>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p>15 giờ 23 phút Hôm nay</p>
                                                    <div className="box-noti">
                                                        <h5><i className="bi bi-info-square me-2 text-primary"></i>
                                                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur blanditiis corporis, ipsa minus molestias nam officia officiis quisquam repudiandae sed, ullam vel velit. Aut autem, dolorem enim harum maiores neque quae. Ab assumenda aut consequatur hic illum, impedit minima nemo porro quo repellat! Ab alias animi dicta est eveniet magnam nostrum omnis optio, placeat quisquam. Aspernatur corporis dolorum ducimus excepturi, facere, facilis hic laboriosam nesciunt quasi repellendus repudiandae sunt, ullam vel. Assumenda commodi dignissimos eius excepturi, explicabo facere hic omnis possimus provident, quam quisquam vitae? Amet consequuntur ea enim ex facilis ipsa iste maxime, molestias soluta temporibus velit voluptatum.</span>
                                                        </h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit. Accusamus animi, assumenda blanditiis commodi
                                                            consectetur consequatur dolores eaque hic illum ipsum iste
                                                            labore magni minima non, officia repellat, saepe sint
                                                            voluptatibus? A adipisci assumenda, beatae dicta dolorem
                                                            ducimus earum id incidunt iste iure laborum pariatur
                                                            perferendis, placeat quaerat quam quibusdam quidem ratione,
                                                            reiciendis rem saepe suscipit temporibus vero voluptate.
                                                            Accusantium amet architecto dolore doloremque eos expedita
                                                            fuga id iste modi necessitatibus nisi nostrum obcaecati quis
                                                            quod quos reiciendis, suscipit. Atque dicta dolor doloribus
                                                            eius molestias nisi nobis odio, officiis praesentium,
                                                            reiciendis ut voluptatibus. Distinctio dolores illo illum
                                                            labore provident quam rerum? </p>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p>15 giờ 23 phút Hôm nay</p>
                                                    <div className="box-noti">
                                                        <h5><i className="bi bi-info-square me-2 text-primary"></i>
                                                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur blanditiis corporis, ipsa minus molestias nam officia officiis quisquam repudiandae sed, ullam vel velit. Aut autem, dolorem enim harum maiores neque quae. Ab assumenda aut consequatur hic illum, impedit minima nemo porro quo repellat! Ab alias animi dicta est eveniet magnam nostrum omnis optio, placeat quisquam. Aspernatur corporis dolorum ducimus excepturi, facere, facilis hic laboriosam nesciunt quasi repellendus repudiandae sunt, ullam vel. Assumenda commodi dignissimos eius excepturi, explicabo facere hic omnis possimus provident, quam quisquam vitae? Amet consequuntur ea enim ex facilis ipsa iste maxime, molestias soluta temporibus velit voluptatum.</span>
                                                        </h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit. Accusamus animi, assumenda blanditiis commodi
                                                            consectetur consequatur dolores eaque hic illum ipsum iste
                                                            labore magni minima non, officia repellat, saepe sint
                                                            voluptatibus? A adipisci assumenda, beatae dicta dolorem
                                                            ducimus earum id incidunt iste iure laborum pariatur
                                                            perferendis, placeat quaerat quam quibusdam quidem ratione,
                                                            reiciendis rem saepe suscipit temporibus vero voluptate.
                                                            Accusantium amet architecto dolore doloremque eos expedita
                                                            fuga id iste modi necessitatibus nisi nostrum obcaecati quis
                                                            quod quos reiciendis, suscipit. Atque dicta dolor doloribus
                                                            eius molestias nisi nobis odio, officiis praesentium,
                                                            reiciendis ut voluptatibus. Distinctio dolores illo illum
                                                            labore provident quam rerum? </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu5" className="tab-pane fade">
                                <h2 className="title-name mb-3">Cài đặt</h2>
                                <div className="row">
                                    <h5>Thông tin cơ bản</h5>
                                    <div className="col-12">
                                        <div className="form-user-profile">
                                            <form>
                                                <div className="row">
                                                    <div className="input-normal d-flex flex-column col-12">
                                                        <label>Public key</label>
                                                        <input type="text"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="container-button-infor-user">
                                                            <button>Xác nhận</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <form>
                                                <div className="row">
                                                    <div className="input-normal d-flex flex-column col-12">
                                                        <label>Private key</label>
                                                        <input type="text"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="container-button-infor-user">
                                                            <button>Xác nhận</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfor;