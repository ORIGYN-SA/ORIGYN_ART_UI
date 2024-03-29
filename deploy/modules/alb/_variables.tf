variable "health_check_path" {
  default = "/health"
}
variable "tsl_certificate_arn" {}
variable "load_balancer_type" {}
variable "alb_name" {}
variable "alb_tg_name" {}
variable "security_group_ids" {}
variable "public_subnet_ids" {}
variable "vpc_id" {}
variable "kms_name" {}
variable "waf_enable" {}
variable "waf_web_acl_name" {}
variable "tags" {}