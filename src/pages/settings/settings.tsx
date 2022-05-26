import { Menu } from "../../components";
import { Layout } from "../../modules";
import ThemeSwitcher from "../../modules/theme-switcher";

function Settings() {
  return (
    <Layout>
      <Layout.Title isUnderlined>Settings</Layout.Title>
      <div className="row">
        <Menu title="Appearance" className="col-12 col-sm-6">
          <div className="d-flex align-items-center justify-content-between">
            <span className="text-bold">Dark Mode</span>
            <ThemeSwitcher />
          </div>
        </Menu>
        <div className="col-12 col-sm-6"></div>
      </div>
    </Layout>
  );
}

export default Settings;
