import { Notify } from 'notiflix/build/notiflix-notify-aio';
export default function Notification({ message }) {
  return Notify.failure({ message });
}
