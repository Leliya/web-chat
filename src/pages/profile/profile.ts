import { Block, registerComponent } from '../../utils/';
import { Button } from '../../partials/components/button/button';
import Avatar from '../../partials/components/avatar/avatar';
import FormProfile from './components/formProfile/formProfile';
import { FieldProfile } from './components/fieldProfile/fieldProfile';
import { Input } from '../../partials/components/input/input';
import { ErrorInput } from '../../partials/components/errorInput/errorInput';
import Store from '../../utils/Store';
import { withRouter } from '../../utils/HOC/withRouter';
import { RouterInterface } from '../../utils/Router/RouterInterface';
import { ModalProfile } from './components/modalProfile/modalProfile';
import { FormModalProfile } from './components/formModalProfile/formModalProfile';
import { InputProfile } from './components/inputProfile';
import { RESOURCE_URL } from '../../data/const';
import { withUser } from '../../utils/HOC/withUser';

registerComponent(Button);
registerComponent(Avatar);
registerComponent(FormProfile);
registerComponent(FieldProfile);
registerComponent(Input);
registerComponent(ErrorInput);
registerComponent(ModalProfile);
registerComponent(FormModalProfile);
registerComponent(InputProfile);

interface ProfileProps {
  router: RouterInterface;
  store: Store<AppState>;
  user: User | null;
  isStaticDataProfile: boolean;
  isChangePassword: boolean;
  handleGoChats: () => void;
  onOpenChangeAvatar: () => void;
}

class Profile extends Block<ProfileProps> {
  static componentName = 'Profile';

  constructor(props: ProfileProps) {
    super({
      ...props,
      handleGoChats: () => this.props.router.back(),
      onOpenChangeAvatar: () => this.onToggleElement('modalChangeAvatar'),
    });
  }

  getAvatar() {
    if (this.props.user?.avatar) {
      return RESOURCE_URL + this.props.user.avatar;
    }
    return '';
  }

  onToggleElement(ref: string) {
    this.refs[ref].toggleDisplayElement();
  }

  componentDidUpdate(): boolean {
    return window.store.getState().screen === 'profile';
  }

  render() {
    return `
      <main class="profile">
        <div class="profile__button-goback">
          {{{Button class="goback" type="button" label="Назад" onClick=handleGoChats}}}
        </div>
        <div class="profile__box">
          {{{Avatar class="profile__avatar" onClick=onOpenChangeAvatar avatar="${this.getAvatar()}"}}}
          {{#if isStaticDataProfile}}
            <h3 class="profile__name">{{user.first_name}}</h3>
          {{/if}}
          {{{FormProfile user=user isStaticDataProfile=isStaticDataProfile}}}
        </div>
        {{{ModalProfile
          errorTitle=false
          uploadFile=''
          formName="avatar"
          title="Загрузите файл"
          buttonName="Поменять"
          ref="modalChangeAvatar"
          inputName="avatarInput"
          onClick=onOpenChangeAvatar
        }}}
      </main>
    `;
  }
}

export default withRouter(withUser(Profile));
