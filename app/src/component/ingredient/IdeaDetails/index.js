import React, { useState, useEffect } from "react";
import './idea_details.css'

const IdeaDetails = () =>{
    const [timeLeft, setTimeLeft] = useState(3600*24); // 1 giờ (3600 giây)

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            // Cleanup interval on component unmount
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h:${m}m:${s}s`;
    };
  return(
      <div className="idea-details">
          <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 col-12">
                        <div className="user-info-of-idea d-flex align-items-center">
                            <a href="#">
                                <div className="img-ava-user">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                        alt=""/>
                                </div>
                            </a>
                            <a href="#">
                                <span className="m-0 text-black">NhanDu123</span>
                            </a>
                        </div>
                        <div className="idea-info-details">
                            <h1>Ý tưởng</h1>
                            <h2>Dự Án Phát Triển Phần Mềm Hỗ Trợ Nuôi Dạy Trẻ</h2>
                            <div className="description-idea">
                                <div className="img-idea-details">
                                    <div className="control-img">
                                        <img
                                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5409433-9e19-438b-a37a-f4ee631c5b1f/dhjrjxc-a00f3df1-90e4-40bc-815d-c7c679f3c4bc.png/v1/fill/w_700,h_336,q_70,strp/there_are_coming_by_dmitrykovalenko_dhjrjxc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvZTU0MDk0MzMtOWUxOS00MzhiLWEzN2EtZjRlZTYzMWM1YjFmXC9kaGpyanhjLWEwMGYzZGYxLTkwZTQtNDBiYy04MTVkLWM3YzY3OWYzYzRiYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5HfoHGdM8A6Y2gMPf2sLpU0FUQZeuYoU1oDoWKkSl8Y"
                                            alt=""/>
                                    </div>
                                </div>
                                <p>Dự án phát triển phần mềm hỗ trợ nuôi dạy trẻ nhằm mục tiêu giúp các bậc cha mẹ và người giám hộ có công cụ hữu ích để theo dõi, quản lý và cải thiện quá trình nuôi dạy trẻ em.
                                Theo dõi phát triển, quản lý các hoạt động thường ngày,giáo dục, học tập và tư vấn giúp trẻ phát triển một cách toàn diện</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-12">
                        <div className="idea-feedback-user d-flex flex-column">
                            <div className="col-12">
                                <div className="the-prizes">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-currency-exchange me-2"></i>
                                        <p className="prize-money mb-0">
                                            1 <span className="unit">SOL</span>
                                        </p>
                                    </div>
                                    <span>Phần thưởng</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-feedback">
                                    <textarea placeholder="Để lại phản hồi tại đây" name="feed-back" rows="10">
                                    </textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="idea-any-details d-flex justify-content-between">
                                    <div className="d-flex flex-column text-start">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-briefcase me-2"></i>
                                            <p className="remaining-feedback">15/100</p>
                                        </div>
                                        <p>Số phản hồi</p>
                                    </div>
                                    <div className="d-flex flex-column text-end">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-stopwatch me-2"></i>
                                            <p className="hours-idea">{formatTime(timeLeft)}</p>
                                        </div>
                                        <p>Thời gian còn lại</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="btn-feedback">
                                    <a href="">Send Feedback Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  );
};

export default IdeaDetails;