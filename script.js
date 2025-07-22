document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateCard');
    const studentPhotoInput = document.getElementById('studentPhoto');

    const cardUniversityLogo = document.getElementById('cardUniversityLogo');
    const cardUniversityName = document.getElementById('cardUniversityName');
    const cardStudentPhoto = document.getElementById('cardStudentPhoto');
    const cardStudentName = document.getElementById('cardStudentName');
    const cardDob = document.getElementById('cardDob');
    const cardStudentId = document.getElementById('cardStudentId');
    const cardCourse = document.getElementById('cardCourse');
    const cardDepartment = document.getElementById('cardDepartment');
    const cardValidity = document.getElementById('cardValidity');

    // Mẫu logo cho một số trường đại học Việt Nam
    const universityLogos = {
        'DaiHocQuocGiaHCM': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Logo_DHQGTPHCM.svg/1200px-Logo_DHQGTPHCM.svg.png',
        'DaiHocBachKhoaHN': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Logo-hust.png/800px-Logo-hust.png',
        'DaiHocCanTho': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Logo_Dai_hoc_Can_Tho.svg/1200px-Logo_Dai_hoc_Can_Tho.svg.png',
        'DaiHocKinhTeQuocDan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/NEU_LOGO.png/800px-NEU_LOGO.png'
        // Thêm URL logo của các trường khác nếu có
    };

    generateButton.addEventListener('click', () => {
        const universitySelect = document.getElementById('university');
        const selectedUniversityValue = universitySelect.value;
        const selectedUniversityText = universitySelect.options[universitySelect.selectedIndex].text;

        const studentName = document.getElementById('studentName').value;
        const dob = document.getElementById('dob').value;
        const studentId = document.getElementById('studentId').value;
        const course = document.getElementById('course').value;
        const department = document.getElementById('department').value;
        const validity = document.getElementById('validity').value;

        // Cập nhật thông tin lên thẻ
        cardUniversityName.textContent = selectedUniversityText;
        cardStudentName.textContent = studentName;
        cardDob.textContent = dob ? formatDate(dob) : ''; // Định dạng ngày sinh
        cardStudentId.textContent = studentId;
        cardCourse.textContent = course;
        cardDepartment.textContent = department;
        cardValidity.textContent = validity;

        // Cập nhật logo trường
        if (universityLogos[selectedUniversityValue]) {
            cardUniversityLogo.src = universityLogos[selectedUniversityValue];
        } else {
            cardUniversityLogo.src = 'placeholder-logo.png'; // Logo mặc định nếu không tìm thấy
        }

        // Xử lý ảnh sinh viên
        if (studentPhotoInput.files.length > 0) {
            const reader = new FileReader();
            reader.onload = (e) => {
                cardStudentPhoto.src = e.target.result;
            };
            reader.readAsDataURL(studentPhotoInput.files[0]);
        } else {
            cardStudentPhoto.src = 'default-avatar.png'; // Ảnh mặc định nếu không có ảnh tải lên
        }
    });

    // Hàm định dạng ngày (ví dụ: YYYY-MM-DD sang DD/MM/YYYY)
    function formatDate(dateString) {
        if (!dateString) return '';
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }
});