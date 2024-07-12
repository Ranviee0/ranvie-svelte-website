<script>
	import Navbar from '../../lib/Navbar.svelte';
	import Ranviee from '../../images/ranviee900.jpg';
	import Theme from '../../images/theme176.jpg';
</script>

<Navbar></Navbar>

<div class="about">
	<div class="content">
		<h1>About</h1>
		<p>คุณน่าจะรู้จักผมจากคลิปสารคดี "ประวัติวิวัฒนาการ" บน YouTube</p>
		<p>
			ผมได้สร้าง Personal Site นี้ขึ้นมาเพื่อเก็บและจัดเรียงข้อมูลประเภทอื่นๆที่ไม่ใช่วิดิโอ <br />
			และเพื่อเป็น Link Tree สำหรับรวมลิงก์ต่างๆที่สำคัญ
		</p>
		<div class="linktree">
			<h2>Link Tree</h2>
			<div class="link">
				<a href="https://www.youtube.com/@ranviee">
					<img src={Ranviee} alt="Ranviee" class="image" width="100" />
				</a>
				<div class="link-text">
					<a class="link-text-header" href="https://www.youtube.com/@ranviee">Ranviee</a> <br />
					<div class="link-text-content">
						<p1>ช่อง YouTube ของผมเอง</p1> <br />
						<p1>ปัจจุบันอัพโหลดคลิป "ประวัติวิวัฒนาการ" เป็นหลัก</p1> <br />
					</div>
				</div>
			</div>
			<div class="link">
				<a href="https://www.youtube.com/@themeanimations">
					<img src={Theme} alt="Ranviee" class="image" width="100" />
				</a>
				<div class="link-text">
					<a class="link-text-header" href="https://www.youtube.com/@themeanimations"
						>Theme Animations</a
					> <br />
					<div class="link-text-content">
						<p1>ช่อง YouTube ของ Theme</p1> <br />
						<p1>ผู้ซึ่งอยู่เบื้องหลังกราฟฟิค 3D ที่ทำด้วย Blender ในแทบทุกวิดิโอ</p1>
						<br />
					</div>
				</div>
			</div>
		</div>
		<h2>Contact</h2>
		<p>ปัจจุบันช่องทางเดียวในการติดต่อผม คือผ่านทาง Discord</p>
		<p>
			วิธีที่แนะนำในการติดต่อ:
			<li>
				เข้าเซิร์ฟเวอร์ <a class="link-text-header" href="https://discord.gg/cJWcPdUPC2">
					Discord
				</a>
			</li>
			<li>จากนั้น DM หาผม (ผู้เดียวที่มีโรลล์ True Administrator)</li>
		</p>
		<p>
			ที่ต้องใช้วิธีนี้ เพราะเนื่องจากผมไม่ค่อยตอบอีเมล
			<br />
			ประกอบกับที่ผมเป็นคนที่เล่นดิสคอร์ดบ่อย
			<br />
			แต่ก็ไม่อยากปล่อย Username ดิสคอร์ดสู่สาธารณะโดยตรง
		</p>
		<br />
		<br />
		<br />
	</div>
</div>

<style>
	.link-text-header {
		font-weight: bold;
		text-decoration: none;
		color: white;
		transition: 0.2s;
	}
	.link-text-header:hover {
		font-weight: bold;
		text-decoration: none;
		color: purple;
		background-color: rgba(145, 92, 182, 0.07);
		box-shadow: 0 0px 25px rgba(145, 92, 182, 0.2);
	}
	.link-text-content {
		padding-top: 6px;
	}
	.link-text {
		padding-left: 15px;
	}
	.image {
		border-radius: 50%;
		transition: 0.3s;
	}
	.link {
		border-radius: 20px;
		padding: 10px;
		background-color: rgb(20, 20, 20);
		display: flex;
		margin-bottom: 15px;
	}
	.image:hover {
		box-shadow: 0 0px 25px rgba(145, 92, 182, 0.5);
	}
	.linktree {
		padding-top: 3px;
	}
	.about {
		/*This part is important for centering*/
		display: grid;
		justify-content: center;
		padding: 20px;
		font-size: 18px;
		font-family: IBM Plex Sans;
		margin-top: 40px;
	}
	.content {
		max-width: 640px;
	}
</style>
