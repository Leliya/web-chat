import { Block, renderDOM, registerComponent } from '../../utils/';
import { Button } from '../../partials/components/button/button';
import { Avatar } from '../../partials/components/avatar/avatar';
import { FormProfile } from './components/formProfile/formProfile';
import { FieldProfile } from './components/fieldProfile/fieldProfile';
import { Input } from '../../partials/components/input/input';
import { ErrorInput } from '../../partials/components/errorInput/errorInput';

registerComponent(Button);
registerComponent(Avatar);
registerComponent(FormProfile);
registerComponent(FieldProfile);
registerComponent(Input);
registerComponent(ErrorInput);

interface ProfileProps {
  isStaticData: boolean;
  isChangePassword: boolean;
}

export class Profile extends Block<ProfileProps> {
  constructor() {
    super({
      isStaticData: false,
      isChangePassword: false,
    });
  }

  render() {
    return `
      <main class="profile">
      <div class="profile__button-goback">
      {{{Button class="goback" type="button" label="Назад"}}}
    </div>
      {{{FormProfile isStaticData=isStaticData isChangePassword=isChangePassword inputsUser=inputsUser inputsPassword=inputsPassword}}}
      </main>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Profile());
});
