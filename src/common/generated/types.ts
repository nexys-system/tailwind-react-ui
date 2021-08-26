// This code was generated automatically via the Nexys platform on Fri Jun 11 2021 15:07:02 GMT+0300 (Moscow Standard Time), do not alter, regenerate if needed
import { Id, Uuid } from '@nexys/utils/dist/types';
export enum UserCertificateStatus {
  expired = 1,
  grace = 2,
  valid = 3,
  underway = 4,
  tentative = 5,
  archived = 6,
  duplicate = 7
}

export enum UserStatus {
  active = 1,
  approved = 2,
  pending = 3,
  inactive = 4,
  denied = 5,
  deleted = 6
}

export enum CbnSessionStatus {
  ongoing = 1,
  finalized = 2
}

export enum UserCompanyLogStatus {
  new = 1,
  approved = 2,
  rejected = 3
}

export enum SurveyStatus {
  active = 1,
  inactive = 2
}

export enum SurveyQuestionQuestiontype {
  rating = 1,
  select = 2,
  multiselect = 3,
  string = 4
}
export interface UserPoints {
  id: Id;
  reason: string;
  logUser?: { id: Id } | User;
  user: { id: Id } | User;
  points: number;
  logDateAdded: Date;
}

export interface CompanyStatus {
  id: Id;
  name: string;
  description?: string;
}

export interface Geo {
  id: Id;
  name: string;
  short: string;
  awardsPoints: number;
  language?: number;
}

export interface GeoStatus {
  id: Id;
  name: string;
  description?: string;
}

export interface UserAnswer {
  id: Id;
  logUser?: { id: Id } | User;
  logDateAdded: Date;
  answer: { id: Id } | Answer;
  isCorrect: number;
  userQuestion: { id: Id } | UserQuestion;
}

export interface GeoCertModule {
  id: Id;
  isDisplayed: number;
  logDateAdded: Date;
  geoCert: { id: Id } | GeoCert;
  certModule: { id: Id } | CertModule;
  logUser?: { id: Id } | User;
  isMandatory: number;
}

export interface Company {
  id: Id;
  logDateAdded: Date;
  country?: { id: Id } | Country;
  wwId?: string;
  name: string;
  status: { id: Id } | CompanyStatus;
  type: number;
  logUser?: { id: Id } | User;
  ceId: string;
}

export interface UserPointsTransfer {
  id: Id;
  user: { id: Id } | User;
  points: number;
  report?: { id: Id } | Report;
}

export interface LinkType {
  id: Id;
  name: string;
  description?: string;
  label?: string;
}

export interface CertTranslation {
  id: Id;
  title: string;
  cert: { id: Id } | Cert;
  language: number;
  description?: string;
  status: { id: Id } | PreviewStatus;
}

export interface UserModule {
  id: Id;
  logDateAdded: Date;
  score: number;
  passed?: Date;
  userCert?: { id: Id } | UserCertificate;
  logUser?: { id: Id } | User;
  module: { id: Id } | Module;
  user: { id: Id } | User;
}

export interface UserCertificate {
  id: Id;
  issued?: Date;
  user: { id: Id } | User;
  logUser?: { id: Id } | User;
  cert: { id: Id } | Cert;
  printed?: Date;
  score: number;
  expires?: Date;
  logDateAdded: Date;
  testUserId?: string;
  reason?: string;
  badgeStatus?: number;
  isLog?: number;
  status: UserCertificateStatus;
  badgeId?: string;
  logComment?: string;
  pdfUrl?: string;
}

export interface Country {
  id: Id;
  name: string;
  iso3: string;
  market?: { id: Id } | Market;
  iso2: string;
}

export interface Question {
  id: Id;
  language: number;
  reference?: { id: Id } | Question;
  weight?: number;
  label: string;
}

export interface ContentStatus {
  id: Id;
  name: string;
  description?: string;
}

export interface GeoCert {
  id: Id;
  logUser?: { id: Id } | User;
  geo: { id: Id } | Geo;
  logDateAdded: Date;
  cert: { id: Id } | Cert;
  status: { id: Id } | GeoStatus;
}

export interface ResourceCategory {
  id: Id;
  name: string;
  description?: string;
}

export interface ModuleLesson {
  id: Id;
  module: { id: Id } | Module;
  isMandatory: number;
  position: number;
  lesson: { id: Id } | Lesson;
}

export interface UserLessonResource {
  id: Id;
  lessonResourceId: number;
  logDateAdded: Date;
  userLesson?: { id: Id } | UserLesson;
  logUser?: { id: Id } | User;
}

export interface ResourceType {
  id: Id;
  name: string;
  description?: string;
}

export interface LessonResource {
  id: Id;
  lesson: { id: Id } | Lesson;
  category: { id: Id } | ResourceCategory;
  resource: { id: Id } | Resource;
  label: string;
  position: number;
}

export interface Resource {
  id: Id;
  label: string;
  type: { id: Id } | ResourceType;
}

export interface Market {
  id: Id;
  name?: string;
  geo: { id: Id } | Geo;
  short: string;
}

export interface UserQuestion {
  id: Id;
  logUser?: { id: Id } | User;
  logDateAdded: Date;
  question: { id: Id } | Question;
  userLesson?: { id: Id } | UserLesson;
  isCorrect: number;
}

export interface UserAddress {
  id: Id;
  user: { id: Id } | User;
  street: string;
  zip: string;
  country: { id: Id } | Country;
  city: string;
}

export interface ModuleTranslation {
  id: Id;
  title: string;
  status: { id: Id } | PreviewStatus;
  language: number;
  description?: string;
  module: { id: Id } | Module;
}

export interface GdprData {
  id: Id;
  userId: number;
  requestId?: number;
  entityTypeId: number;
  dateExpire?: Date;
  entityId: number;
}

export interface File {
  id: Id;
  name: string;
  keyy: string;
  size: number;
  resource: { id: Id } | Resource;
  contentType: string;
  type: { id: Id } | FileType;
}

export interface PreviewStatus {
  id: Id;
  name: string;
  description?: string;
}

export interface Tag {
  id: Id;
  color: string;
  label: string;
}

export interface ReportType {
  id: Id;
  label?: string;
  name: string;
  description?: string;
}

export interface Cert {
  id: Id;
  logDateAdded: Date;
  logUser?: { id: Id } | User;
  status: { id: Id } | ContentStatus;
  badge?: string;
  points: number;
}

export interface User {
  id: Id;
  secretKey: string;
  email: string;
  firstName: string;
  password?: string;
  logIp: string;
  simulcationUser?: number;
  logDateAdded: Date;
  lastName: string;
  isAdmin: number;
  company?: { id: Id } | Company;
  status: UserStatus;
  language: number;
  kyiId?: string;
  country: { id: Id } | Country;
  instance: { uuid: Uuid } | Instance;
}

export interface UserCompany {
  id: Id;
  leaveDateTime?: Date;
  logDateAdded: Date;
  logUser?: { id: Id } | User;
  startDateTime: Date;
  user: { id: Id } | User;
  retention?: number;
  company: { id: Id } | Company;
}

export interface Report {
  id: Id;
  modulePoints?: number;
  printType?: number;
  modules?: number;
  certificatePoints?: number;
  bonusPoints?: number;
  logUser?: { id: Id } | User;
  contentType: string;
  logDateAdded: Date;
  users: number;
  certificates?: number;
  reportType: { id: Id } | ReportType;
}

export interface FileType {
  id: Id;
  name: string;
  label?: string;
  description?: string;
}

export interface CertModule {
  id: Id;
  cert: { id: Id } | Cert;
  isMandatory?: number;
  position?: number;
  module: { id: Id } | Module;
}

export interface UserLesson {
  id: Id;
  testPercCorrect?: number;
  logDateAdded: Date;
  userModule?: { id: Id } | UserModule;
  testNumCorrect?: number;
  keyy?: string;
  lesson: { id: Id } | Lesson;
  logUser?: { id: Id } | User;
  passed?: number;
}

export interface Lesson {
  id: Id;
  description?: string;
  title: string;
  testNQuestion?: number;
  reference?: { id: Id } | Lesson;
  language: number;
  testWeight?: number;
  externalId?: number;
  testPassrate?: number;
}

export interface LessonQuestion {
  id: Id;
  lesson: { id: Id } | Lesson;
  question: { id: Id } | Question;
  position: number;
}

export interface Module {
  id: Id;
  externalId?: number;
  tag?: { id: Id } | Tag;
  label?: string;
  points: number;
  color?: string;
  status: { id: Id } | ContentStatus;
}

export interface GdprRequest {
  id: Id;
  fullName: string;
  typeId: number;
  statusId: number;
  email: string;
  countryId?: number;
  date?: Date;
  explanation?: string;
}

export interface UserStatusSurvey {
  uuid: Uuid;
  user: { id: Id } | User;
  confirmed: Date;
  phase: number;
}

export interface Link {
  id: Id;
  type: { id: Id } | LinkType;
  resource: { id: Id } | Resource;
  url: string;
}

export interface Answer {
  id: Id;
  question: { id: Id } | Question;
  label: string;
  position: number;
  correct: number;
}

export interface UserLoginInfo {
  id: Id;
  user?: { id: Id } | User;
  tokenExp?: number;
  uaMinor?: string;
  uaMajor?: string;
  date?: Date;
  osFamily?: string;
  uaFamily?: string;
  ip?: string;
  devFamily?: string;
  osMinor?: string;
  osMajor?: string;
  host?: string;
  adminUserId?: number;
}

export interface UserCertificateLog {
  id: Id;
  userCertificate: { id: Id } | UserCertificate;
  logDateAdded: Date;
  description?: string;
  logUser: { id: Id } | User;
  status?: number;
}

export interface Instance {
  uuid: Uuid;
  name: string;
  logDateAdded: Date;
}

export interface Permission {
  uuid: Uuid;
  name: string;
}

export interface PermissionInstance {
  uuid: Uuid;
  instance: { uuid: Uuid } | Instance;
  permission: { uuid: Uuid } | Permission;
}

export interface UserPermission {
  uuid: Uuid;
  permissionInstance: { uuid: Uuid } | PermissionInstance;
  user: { id: Id } | User;
}

export interface CbnSession {
  id: Id;
  startDate: Date;
  emailDateOne?: Date;
  emailDateTwo?: Date;
  status: CbnSessionStatus;
  closeDate?: Date;
}

export interface CbnUserLog {
  id: Id;
  cbnSession: { id: Id } | CbnSession;
  user: { id: Id } | User;
  answerDate?: Date;
  answer?: number;
  finalization?: number;
}

export interface UserCompanyLog {
  id: Id;
  user: { id: Id } | User;
  companyOld: { id: Id } | Company;
  companyNew: { id: Id } | Company;
  status: UserCompanyLogStatus;
  logDateAdded?: Date;
  logUser?: { id: Id } | User;
  reason?: string;
}

export interface CertPdf {
  id: Id;
  cert: { id: Id } | Cert;
  backgroundUrl: string;
  signatureUrl: string;
  issuerName: string;
  issuerRole: string;
}

export interface Survey {
  id: Id;
  certificate?: { id: Id } | Cert;
  status: SurveyStatus;
  logDateAdded: Date;
}

export interface SurveyQuestion {
  id: Id;
  survey: { id: Id } | Survey;
  questionType: SurveyQuestionQuestiontype;
  title: string;
  position: number;
  allowComment?: boolean;
  isMandatory: number;
}

export interface SurveyQuestionOption {
  id: Id;
  surveyQuestion: { id: Id } | SurveyQuestion;
  title: string;
}

export interface UserSurvey {
  id: Id;
  userCertificate?: { id: Id } | UserCertificate;
  user: { id: Id } | User;
  survey: { id: Id } | Survey;
  logDateAdded: Date;
}

export interface UserSurveyAnswer {
  id: Id;
  surveyQuestion: { id: Id } | SurveyQuestion;
  rating?: number;
  string?: string;
}

export interface UserSurveyAnswerOption {
  id: Id;
  userSurveyAnswer: { id: Id } | UserSurveyAnswer;
  surveyQuestionOption: { id: Id } | SurveyQuestionOption;
}
