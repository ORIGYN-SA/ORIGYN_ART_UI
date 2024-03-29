variable "ecs_cluster_name" {}
variable "ecs_service_name" {}
variable "app_name_prefix" {}
variable "ecs_task_role_name" {}
variable "ecs_execution_role_name" {}
variable "ecs_task_definition_name" {}
variable "security_group_ids" {}
variable "private_subnet_ids" {}
variable "ecr_name" {}
variable "container_port" {}
variable "container_cpu" {}
variable "container_memory" {}
variable "service_desired_count" {}
variable "alb_tg_group_arn" {}
variable "environment" {}
variable "tags" {}
variable "enable_autoScaling" {
  default = false
}
variable "scale_target_max_capacity" {
  default = 5
}
variable "scale_target_min_capacity" {
  default = 1
}
variable "max_cpu_threshold" {
  default = "60"
}
variable "min_cpu_threshold" {
  default = "10"
}

variable "max_cpu_evaluation_period" {
  default = "3"
}
variable "min_cpu_evaluation_period" {
  default = "3"
}
variable "enable_containerInsights" {
  default = "enabled"
}
variable "kms_name" {}