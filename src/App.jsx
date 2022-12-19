import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/login'
import NewsAdmin from './pages/news_admin/news_admin'
import AddNews from './pages/add_news/add_news'
import EditNews from './pages/edit_news/edit_news'
import PagesAdmin from './pages/sahifa/sahifa'
import AddPage from './pages/add_page/add_page'
import EditPage from './pages/edit_page/edit_page'
import AdminAnnouncements from './pages/announcements_admin/announcements_admin'
import AddAnnouncements from './pages/add_announcements/add_announcements'
import AnnouncementsEdit from './pages/announcements_edit/announcements_edit'
import Upload from './pages/admin_upload/admin_upload'
import AdminPhoto from './pages/admin_photo/admin_photo'
import AdminVideo from './pages/admin_video/admin_video'
import AdminFile from './pages/admin_file/admin_file'
import StatisticsPage from './pages/statistics/statistics'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/yangilik" element={<NewsAdmin />} />
        <Route path="/admin/news/add" element={<AddNews />} />
        <Route path="/admin/news_edit/:id" element={<EditNews />} />
        <Route path="/admin/page" element={<PagesAdmin />} />
        <Route path="/admin/page/add" element={<AddPage />} />
        <Route path="/admin/page/edit/:id" element={<EditPage />} />
        <Route path="/admin/announcement" element={<AdminAnnouncements />} />
        <Route path="/admin/announcement/add" element={<AddAnnouncements />} />
        <Route path="/admin/announcements/edit/:id" element={<AnnouncementsEdit />} />
        <Route path="/admin/upload" element={<Upload />} />
        <Route path="/admin/photo" element={<AdminPhoto />} />
        <Route path="/admin/videos" element={<AdminVideo />} />
        <Route path="/admin/files" element={<AdminFile />} />
        <Route path="/admin/statistic/all" element={<StatisticsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
