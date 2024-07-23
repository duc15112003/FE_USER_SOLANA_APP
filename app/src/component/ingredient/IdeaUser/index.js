import React from "react";
import './ideauser.css'

const IdeaUser = () => {
  return (
    <div className="idea-user">
        <div className="container">
            <div className="row ideas">
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="box-idea position-relative">
                        <a href="#">
                            <div className="inside-box-idea position-relative">
                                <div>
                                    <img className="img-idea"
                                         src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                         alt="photo"/>
                                </div>
                                <div className="idea-info d-flex flex-column justify-content-between">
                                    <div className="user-info-of-idea d-flex align-items-center">
                                        <div className="img-ava-user">
                                            <img
                                                src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                                alt=""/>
                                        </div>
                                        <span className="m-0">NhanDu123</span>
                                    </div>
                                    <div className="idea-infor-user">
                                        <div className="title">
                                            <h3>CATEGORY IDEA</h3>
                                            <h1>HOME DESIGN CONSULTATION SERVICES</h1>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem
                                                cupiditate dolorum ea error est, eum, fugit hic laboriosam mollitia
                                                optio
                                                pariatur perferendis quas quibusdam sed sequi tempore voluptatibus!
                                                Accusamus aspernatur autem culpa cupiditate debitis dolore
                                                exercitationem
                                                facere id labore molestiae nemo officia perspiciatis quaerat qui ratione
                                                tempora, tempore ullam, unde veritatis, voluptatibus. Ea, excepturi
                                                facere
                                                ipsum molestiae mollitia neque obcaecati quidem ratione reiciendis unde!
                                                Consequatur exercitationem, expedita id incidunt iste iusto minus modi
                                                nobis
                                                nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                                voluptate?
                                                At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                                libero obcaecati quod repellat voluptatem.</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href="#" className="button-survey">
                                                CONDUCT THIS SURVEY
                                            </a>
                                            <div className="line-between"></div>
                                            <div className="the-number d-flex flex-column">
                                                <div className="quantity">
                                                    <span>50/100</span>
                                                    <i className="bi bi-clipboard2-check"></i>
                                                </div>
                                                <div className="award">
                                                    <span>20000</span>
                                                    <i className="bi bi-wallet2"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="box-idea position-relative">
                        <a href="#">
                            <div className="inside-box-idea position-relative">
                                <div>
                                    <img className="img-idea"
                                         src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                         alt="photo"/>
                                </div>
                                <div className="idea-info d-flex flex-column justify-content-between">
                                    <div className="user-info-of-idea d-flex align-items-center">
                                        <div className="img-ava-user">
                                            <img
                                                src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                                alt=""/>
                                        </div>
                                        <span className="m-0">NhanDu123</span>
                                    </div>
                                    <div className="idea-infor-user">
                                        <div className="title">
                                            <h3>CATEGORY IDEA</h3>
                                            <h1>HOME DESIGN CONSULTATION SERVICES</h1>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem
                                                cupiditate dolorum ea error est, eum, fugit hic laboriosam mollitia
                                                optio
                                                pariatur perferendis quas quibusdam sed sequi tempore voluptatibus!
                                                Accusamus aspernatur autem culpa cupiditate debitis dolore
                                                exercitationem
                                                facere id labore molestiae nemo officia perspiciatis quaerat qui ratione
                                                tempora, tempore ullam, unde veritatis, voluptatibus. Ea, excepturi
                                                facere
                                                ipsum molestiae mollitia neque obcaecati quidem ratione reiciendis unde!
                                                Consequatur exercitationem, expedita id incidunt iste iusto minus modi
                                                nobis
                                                nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                                voluptate?
                                                At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                                libero obcaecati quod repellat voluptatem.</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href="#" className="button-survey">
                                                CONDUCT THIS SURVEY
                                            </a>
                                            <div className="line-between"></div>
                                            <div className="the-number d-flex flex-column">
                                                <div className="quantity">
                                                    <span>50/100</span>
                                                    <i className="bi bi-clipboard2-check"></i>
                                                </div>
                                                <div className="award">
                                                    <span>20000</span>
                                                    <i className="bi bi-wallet2"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="box-idea position-relative">
                        <a href="#">
                            <div className="inside-box-idea position-relative">
                                <div>
                                    <img className="img-idea"
                                         src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                         alt="photo"/>
                                </div>
                                <div className="idea-info d-flex flex-column justify-content-between">
                                    <div className="user-info-of-idea d-flex align-items-center">
                                        <div className="img-ava-user">
                                            <img
                                                src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                                alt=""/>
                                        </div>
                                        <span className="m-0">NhanDu123</span>
                                    </div>
                                    <div className="idea-infor-user">
                                        <div className="title">
                                            <h3>CATEGORY IDEA</h3>
                                            <h1>HOME DESIGN CONSULTATION SERVICES</h1>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem
                                                cupiditate dolorum ea error est, eum, fugit hic laboriosam mollitia
                                                optio
                                                pariatur perferendis quas quibusdam sed sequi tempore voluptatibus!
                                                Accusamus aspernatur autem culpa cupiditate debitis dolore
                                                exercitationem
                                                facere id labore molestiae nemo officia perspiciatis quaerat qui ratione
                                                tempora, tempore ullam, unde veritatis, voluptatibus. Ea, excepturi
                                                facere
                                                ipsum molestiae mollitia neque obcaecati quidem ratione reiciendis unde!
                                                Consequatur exercitationem, expedita id incidunt iste iusto minus modi
                                                nobis
                                                nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                                voluptate?
                                                At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                                libero obcaecati quod repellat voluptatem.</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href="#" className="button-survey">
                                                CONDUCT THIS SURVEY
                                            </a>
                                            <div className="line-between"></div>
                                            <div className="the-number d-flex flex-column">
                                                <div className="quantity">
                                                    <span>50/100</span>
                                                    <i className="bi bi-clipboard2-check"></i>
                                                </div>
                                                <div className="award">
                                                    <span>20000</span>
                                                    <i className="bi bi-wallet2"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="box-idea position-relative">
                        <a href="#">
                            <div className="inside-box-idea position-relative">
                                <div>
                                    <img className="img-idea"
                                         src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                         alt="photo"/>
                                </div>
                                <div className="idea-info d-flex flex-column justify-content-between">
                                    <div className="user-info-of-idea d-flex align-items-center">
                                        <div className="img-ava-user">
                                            <img
                                                src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                                alt=""/>
                                        </div>
                                        <span className="m-0">NhanDu123</span>
                                    </div>
                                    <div className="idea-infor-user">
                                        <div className="title">
                                            <h3>CATEGORY IDEA</h3>
                                            <h1>HOME DESIGN CONSULTATION SERVICES</h1>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem
                                                cupiditate dolorum ea error est, eum, fugit hic laboriosam mollitia
                                                optio
                                                pariatur perferendis quas quibusdam sed sequi tempore voluptatibus!
                                                Accusamus aspernatur autem culpa cupiditate debitis dolore
                                                exercitationem
                                                facere id labore molestiae nemo officia perspiciatis quaerat qui ratione
                                                tempora, tempore ullam, unde veritatis, voluptatibus. Ea, excepturi
                                                facere
                                                ipsum molestiae mollitia neque obcaecati quidem ratione reiciendis unde!
                                                Consequatur exercitationem, expedita id incidunt iste iusto minus modi
                                                nobis
                                                nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                                voluptate?
                                                At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                                libero obcaecati quod repellat voluptatem.</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href="#" className="button-survey">
                                                CONDUCT THIS SURVEY
                                            </a>
                                            <div className="line-between"></div>
                                            <div className="the-number d-flex flex-column">
                                                <div className="quantity">
                                                    <span>50/100</span>
                                                    <i className="bi bi-clipboard2-check"></i>
                                                </div>
                                                <div className="award">
                                                    <span>20000</span>
                                                    <i className="bi bi-wallet2"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="box-idea position-relative">
                        <a href="#">
                            <div className="inside-box-idea position-relative">
                                <div>
                                    <img className="img-idea"
                                         src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                         alt="photo"/>
                                </div>
                                <div className="idea-info d-flex flex-column justify-content-between">
                                    <div className="user-info-of-idea d-flex align-items-center">
                                        <div className="img-ava-user">
                                            <img
                                                src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                                alt=""/>
                                        </div>
                                        <span className="m-0">NhanDu123</span>
                                    </div>
                                    <div className="idea-infor-user">
                                        <div className="title">
                                            <h3>CATEGORY IDEA</h3>
                                            <h1>HOME DESIGN CONSULTATION SERVICES</h1>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem
                                                cupiditate dolorum ea error est, eum, fugit hic laboriosam mollitia
                                                optio
                                                pariatur perferendis quas quibusdam sed sequi tempore voluptatibus!
                                                Accusamus aspernatur autem culpa cupiditate debitis dolore
                                                exercitationem
                                                facere id labore molestiae nemo officia perspiciatis quaerat qui ratione
                                                tempora, tempore ullam, unde veritatis, voluptatibus. Ea, excepturi
                                                facere
                                                ipsum molestiae mollitia neque obcaecati quidem ratione reiciendis unde!
                                                Consequatur exercitationem, expedita id incidunt iste iusto minus modi
                                                nobis
                                                nostrum nulla odit optio pariatur perferendis placeat rem rerum
                                                voluptate?
                                                At eveniet molestiae quis soluta tempora? Aut doloribus, harum laborum
                                                libero obcaecati quod repellat voluptatem.</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href="#" className="button-survey">
                                                CONDUCT THIS SURVEY
                                            </a>
                                            <div className="line-between"></div>
                                            <div className="the-number d-flex flex-column">
                                                <div className="quantity">
                                                    <span>50/100</span>
                                                    <i className="bi bi-clipboard2-check"></i>
                                                </div>
                                                <div className="award">
                                                    <span>20000</span>
                                                    <i className="bi bi-wallet2"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default IdeaUser;