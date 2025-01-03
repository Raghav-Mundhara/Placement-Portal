import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/placement-stats">Placement Stats</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/announcements">Announcements</Link></li>
        <li><Link href="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;